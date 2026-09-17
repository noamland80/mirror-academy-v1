#!/bin/bash
#
# MIRROR Consultation Training System — launcher.
#
# Double-click this file. It starts MIRROR and opens it in your browser.
# Keep the window that appears open while you are using MIRROR; closing it
# stops the system. Nothing is installed on your machine except, if you choose
# it, the free Node.js runtime that MIRROR runs on.
#

set -uo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP="$HERE/MIRROR System Files"
LOG="$HERE/MIRROR System Files/last-run.log"

# ---------------------------------------------------------------------------
# Talking to the person, not to a terminal
# ---------------------------------------------------------------------------
say()  { printf '   %s\n' "$1"; }
rule() { printf '   %s\n' "────────────────────────────────────────────────────────"; }

# A real dialog on macOS; plain text everywhere else.
dialog() {
  local title="$1" body="$2" button="${3:-OK}" url="${4:-}"
  printf '\n   %s\n   %s\n\n' "$title" "$body"
  if command -v osascript >/dev/null 2>&1; then
    if [ -n "$url" ]; then
      local choice
      choice=$(osascript -e "display dialog \"$body\" with title \"$title\" buttons {\"Close\", \"$button\"} default button \"$button\"" 2>/dev/null || true)
      case "$choice" in *"$button"*) open "$url" >/dev/null 2>&1 || true ;; esac
    else
      osascript -e "display dialog \"$body\" with title \"$title\" buttons {\"OK\"} default button \"OK\"" >/dev/null 2>&1 || true
    fi
  fi
}

fail() {
  dialog "MIRROR could not start" "$1" "${2:-}" "${3:-}"
  printf '\n   This window will stay open so nothing is lost.\n'
  printf '   Press Return to close it.\n\n'
  read -r _ || true
  exit 1
}

clear 2>/dev/null || true
printf '\n'
say "M I R R O R"
say "Consultation Training System"
rule
printf '\n'

# macOS marks anything downloaded as untrusted. Clearing it on ourselves means
# the person is not asked again the next time they open this.
if command -v xattr >/dev/null 2>&1; then
  xattr -dr com.apple.quarantine "$HERE" >/dev/null 2>&1 || true
fi

[ -d "$APP" ] || fail "Some of the MIRROR files are missing. Keep the launcher and the 'MIRROR System Files' folder together, in the same folder, and try again."

# ---------------------------------------------------------------------------
# 1. Find the runtime
# ---------------------------------------------------------------------------
say "Checking your machine…"

NODE=""
for candidate in \
  "$(command -v node 2>/dev/null || true)" \
  /opt/homebrew/bin/node \
  /usr/local/bin/node \
  /usr/bin/node \
  "$HOME/.nvm/versions/node"/*/bin/node \
  "$HOME/.volta/bin/node" \
  /opt/local/bin/node
do
  [ -n "$candidate" ] && [ -x "$candidate" ] && NODE="$candidate" && break
done

if [ -z "$NODE" ]; then
  fail "MIRROR runs on a free component from nodejs.org called Node.js, and it is not on this Mac yet.\n\nClick Download to open the page, choose the large green button for macOS, install it, then double-click this launcher again. It takes about two minutes and only has to be done once." \
       "Download" "https://nodejs.org/en/download"
fi

NODE_VERSION="$("$NODE" -p "process.versions.node" 2>/dev/null || echo "0.0.0")"
NODE_MAJOR="${NODE_VERSION%%.*}"
NODE_MINOR="$(printf '%s' "$NODE_VERSION" | cut -d. -f2)"
say "Runtime found · Node $NODE_VERSION"

if [ "$NODE_MAJOR" -lt 18 ] 2>/dev/null; then
  fail "The version of Node.js on this Mac (${NODE_VERSION}) is older than MIRROR needs.\n\nClick Download to get the current one, install it over the old version, then double-click this launcher again." \
       "Download" "https://nodejs.org/en/download"
fi

# ---------------------------------------------------------------------------
# 2. Make sure it can store your work
#
# Node 22.5 and newer can keep MIRROR's records on its own. Older versions
# need one small component, which is fetched once and then never again.
# ---------------------------------------------------------------------------
HAS_BUILTIN_STORE="$("$NODE" -e "try{require('node:sqlite');console.log('yes')}catch(e){console.log('no')}" 2>/dev/null || echo no)"

if [ "$HAS_BUILTIN_STORE" != "yes" ] && [ ! -d "$APP/node_modules/sqlite3" ]; then
  say "Preparing storage for your work (first run only)…"
  if command -v npm >/dev/null 2>&1; then
    ( cd "$APP" && npm install sqlite3 --no-audit --no-fund --loglevel=error ) >>"$LOG" 2>&1 || true
  fi
  if [ ! -d "$APP/node_modules/sqlite3" ]; then
    fail "MIRROR needs either Node.js 22.5 or newer, or an internet connection the first time it runs.\n\nThis Mac has Node ${NODE_VERSION} and the one-time setup could not reach the internet.\n\nEither connect to the internet and try again, or click Download to install the current Node.js, which needs no setup at all." \
         "Download" "https://nodejs.org/en/download"
  fi
fi

[ -d "$APP/node_modules/express" ] || fail "Some of the MIRROR files are missing from the 'MIRROR System Files' folder. Copy the whole MIRROR folder again from where you received it, keeping everything together."

# ---------------------------------------------------------------------------
# 3. Find a free door for it to listen at
# ---------------------------------------------------------------------------
PORT=""
for p in 5177 5178 5179 5180 7411 7412; do
  if ! ( exec 3<>"/dev/tcp/127.0.0.1/$p" ) 2>/dev/null; then PORT="$p"; break; fi
  exec 3<&- 2>/dev/null || true
done
[ -n "$PORT" ] || fail "Every door MIRROR normally uses is busy on this Mac. Restarting the Mac clears this."

# ---------------------------------------------------------------------------
# 4. Start it
# ---------------------------------------------------------------------------
say "Starting MIRROR…"
: > "$LOG"

cd "$APP" || fail "MIRROR could not open its own folder."
MIRROR_DB="$HERE/MIRROR System Files/your-work.db" \
PORT="$PORT" \
NODE_NO_WARNINGS=1 \
"$NODE" server/index.js >>"$LOG" 2>&1 &
SERVER_PID=$!

cleanup() {
  printf '\n   Closing MIRROR…\n'
  kill "$SERVER_PID" >/dev/null 2>&1 || true
  wait "$SERVER_PID" 2>/dev/null || true
  printf '   MIRROR is closed. Your work is saved.\n\n'
}
trap cleanup EXIT INT TERM

# Wait for it to actually answer, rather than guessing.
READY=""
for _ in $(seq 1 60); do
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then break; fi
  if "$NODE" -e "
    const http=require('http');
    http.get({host:'127.0.0.1',port:$PORT,path:'/',timeout:900},r=>process.exit(r.statusCode<500?0:1))
      .on('error',()=>process.exit(1)).on('timeout',()=>process.exit(1));
  " >/dev/null 2>&1; then READY="yes"; break; fi
  sleep 0.5
done

if [ -z "$READY" ]; then
  DETAIL="$(tail -n 4 "$LOG" 2>/dev/null | tr '\n' ' ' | cut -c1-240)"
  fail "MIRROR started but did not finish opening.\n\nWhat it reported: ${DETAIL:-nothing}\n\nTrying again usually works. If it does not, send this window to Noam."
fi

# /app is the product. The root is the commercial page, which a buyer who
# already owns MIRROR has no reason to land on.
URL="http://127.0.0.1:$PORT/app"
say "MIRROR is open in your browser."
printf '\n'
rule
say "Keep this window open while you use MIRROR."
say "Close it when you are finished. Your work is saved."
rule
printf '\n'

if command -v open >/dev/null 2>&1; then open "$URL" >/dev/null 2>&1 || true
elif command -v xdg-open >/dev/null 2>&1; then xdg-open "$URL" >/dev/null 2>&1 || true
else say "If your browser did not open, go to: $URL"
fi

wait "$SERVER_PID"
