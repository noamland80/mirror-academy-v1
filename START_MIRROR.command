#!/bin/bash
# ============================================================
#  MIRROR Interactive Sales Academy
#  Double-click this file to open MIRROR.
# ============================================================

cd "$(dirname "$0")" || exit 1
clear

BOLD=$'\033[1m'; DIM=$'\033[2m'; RED=$'\033[31m'; GRN=$'\033[32m'; OFF=$'\033[0m'

echo ""
echo "   ${BOLD}M I R R O R${OFF}"
echo "   ${DIM}Interactive Sales Academy${OFF}"
echo ""
echo "   Starting…"
echo ""

fail() {
  echo ""
  echo "   ${RED}${BOLD}MIRROR could not start.${OFF}"
  echo ""
  echo "   $1"
  echo ""
  echo "   ${DIM}Press any key to close this window.${OFF}"
  read -n 1 -s
  exit 1
}

# ---------- 1. Node present? ----------
if ! command -v node >/dev/null 2>&1; then
  for c in /usr/local/bin/node /opt/homebrew/bin/node; do
    [ -x "$c" ] && export PATH="$(dirname $c):$PATH" && break
  done
fi
command -v node >/dev/null 2>&1 || fail "MIRROR needs Node.js, which is not installed on this Mac.
   Install it once from  https://nodejs.org  (choose the LTS button),
   then double-click START_MIRROR again."

NODE_MAJOR=$(node -p "process.versions.node.split('.')[0]" 2>/dev/null || echo 0)
[ "$NODE_MAJOR" -ge 18 ] 2>/dev/null || fail "This Mac has Node.js version $(node -v 2>/dev/null).
   MIRROR needs version 18 or newer.
   Update it from  https://nodejs.org  and try again."

# ---------- 2. Dependencies ----------
if [ ! -d node_modules ] || [ ! -d node_modules/express ]; then
  echo "   Preparing MIRROR for first use. This happens once and takes a minute…"
  echo ""
  if ! npm install --omit=dev --no-audit --no-fund >/tmp/mirror-install.log 2>&1; then
    fail "The one-time setup did not finish.
   This usually means the Mac was offline during first setup.
   Connect to the internet and double-click START_MIRROR again.
   ${DIM}Details: /tmp/mirror-install.log${OFF}"
  fi
  echo "   ${GRN}Setup complete.${OFF}"
  echo ""
fi

# ---------- 3. Free port ----------
PORT=5050
for p in 5050 5051 5052 5053 5060; do
  if ! lsof -nP -iTCP:$p -sTCP:LISTEN >/dev/null 2>&1; then PORT=$p; break; fi
done
export PORT

# ---------- 4. Start ----------
mkdir -p data
node server/index.js >/tmp/mirror-run.log 2>&1 &
SERVER_PID=$!

cleanup() { kill $SERVER_PID >/dev/null 2>&1; }
trap cleanup EXIT INT TERM

READY=0
for i in $(seq 1 40); do
  if curl -s "http://localhost:$PORT/api/health" >/dev/null 2>&1; then READY=1; break; fi
  kill -0 $SERVER_PID 2>/dev/null || break
  sleep 0.5
done

if [ "$READY" -ne 1 ]; then
  fail "MIRROR started but did not become ready.
   Restart your Mac and try once more.
   ${DIM}Details: /tmp/mirror-run.log${OFF}"
fi

# ---------- 5. Open ----------
# /app is the product; the root is the commercial page.
open "http://localhost:$PORT/app"

echo "   ${GRN}${BOLD}MIRROR is open in your browser.${OFF}"
echo ""
echo "   ${BOLD}Keep this window open while you use MIRROR.${OFF}"
echo "   ${DIM}Closing it, or pressing Control-C, closes MIRROR.${OFF}"
echo "   ${DIM}Your practice is saved automatically.${OFF}"
echo ""

wait $SERVER_PID
