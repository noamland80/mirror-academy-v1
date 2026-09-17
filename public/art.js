/* ==========================================================================
   MIRROR ACADEMY — drawn assets.
   Inline SVG only: module cover art, client portraits, phase icons, teaching
   diagrams, progress rings, signal glyphs. No external images, no icon fonts.
   ========================================================================== */
window.ART = (function () {

  const PAL = {
    sage: ['#47725D', '#7FA893'], champagne: ['#A07E3C', '#C9A45C'],
    mercury: ['#8E8B86', '#C8CCD1'], gold: ['#7E6229', '#C9A45C'],
    rose: ['#A34D53', '#C98A8E']
  };

  /* ---------- module cover art: one distinct composition per module ------- */
  function cover(n, accent) {
    const c = PAL[accent] || PAL.champagne;
    const bg = `<rect width="400" height="120" fill="#241E19"/>`;
    const g = `<defs><linearGradient id="cg${n}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c[0]}" stop-opacity=".85"/>
        <stop offset="1" stop-color="${c[1]}" stop-opacity=".22"/></linearGradient>
      <linearGradient id="cf${n}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${c[1]}" stop-opacity=".55"/>
        <stop offset="1" stop-color="${c[1]}" stop-opacity="0"/></linearGradient></defs>`;
    const art = [
      // 1 psychology — two overlapping profiles
      `<path d="M120 118c0-34 18-52 44-56 20-3 26-16 22-30" stroke="url(#cf1)" stroke-width="2" fill="none"/>
       <circle cx="196" cy="52" r="40" fill="url(#cg1)"/><circle cx="238" cy="66" r="30" fill="none" stroke="${c[1]}" stroke-opacity=".5"/>`,
      // 2 preparation — a room, a threshold
      `<rect x="150" y="26" width="120" height="94" fill="url(#cg2)"/><rect x="182" y="52" width="56" height="68" fill="#241E19"/>
       <line x1="270" y1="26" x2="330" y2="10" stroke="${c[1]}" stroke-opacity=".4" stroke-width="2"/>`,
      // 3 discovery — descending strata
      `<path d="M60 34h280" stroke="${c[1]}" stroke-opacity=".65" stroke-width="2"/>
       <path d="M92 66h216" stroke="${c[1]}" stroke-opacity=".42" stroke-width="2"/>
       <path d="M126 98h148" stroke="${c[1]}" stroke-opacity=".24" stroke-width="2"/>
       <circle cx="200" cy="34" r="5" fill="${c[1]}"/><circle cx="200" cy="66" r="5" fill="${c[1]}" fill-opacity=".6"/><circle cx="200" cy="98" r="5" fill="${c[1]}" fill-opacity=".35"/>`,
      // 4 understanding — mirrored waveform
      `<path d="M40 60q30-34 60 0t60 0 60 0 60 0 60 0" stroke="${c[1]}" stroke-opacity=".7" fill="none" stroke-width="2"/>
       <path d="M40 60q30 34 60 0t60 0 60 0 60 0 60 0" stroke="${c[1]}" stroke-opacity=".25" fill="none" stroke-width="2"/>`,
      // 5 recommendation — three columns, one chosen
      `<rect x="130" y="44" width="34" height="76" fill="${c[1]}" fill-opacity=".22"/>
       <rect x="184" y="24" width="34" height="96" fill="url(#cg5)"/>
       <rect x="238" y="56" width="34" height="64" fill="${c[1]}" fill-opacity=".22"/>`,
      // 6 price — a scale
      `<line x1="200" y1="18" x2="200" y2="70" stroke="${c[1]}" stroke-opacity=".6" stroke-width="2"/>
       <line x1="132" y1="46" x2="268" y2="34" stroke="${c[1]}" stroke-opacity=".7" stroke-width="2"/>
       <circle cx="132" cy="46" r="18" fill="url(#cg6)"/><circle cx="268" cy="34" r="26" fill="none" stroke="${c[1]}" stroke-opacity=".5"/>`,
      // 7 objections — a wall with one open door
      `<g fill="${c[1]}" fill-opacity=".2">${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${112+i*24}" y="${34+(i%2)*10}" width="20" height="76"/>`).join('')}</g>
       <rect x="184" y="34" width="20" height="86" fill="url(#cg7)"/>`,
      // 8 decision — a fork
      `<path d="M200 120V70l-52-40M200 70l52-40" stroke="${c[1]}" stroke-opacity=".65" stroke-width="2" fill="none"/>
       <circle cx="148" cy="30" r="9" fill="${c[1]}"/><circle cx="252" cy="30" r="9" fill="${c[1]}" fill-opacity=".45"/>`,
      // 9 continuation — dated pulses
      `<path d="M40 80h60l14-30 16 60 14-30h56l14-24 16 48 14-24h60" stroke="${c[1]}" stroke-opacity=".7" fill="none" stroke-width="2"/>`,
      // 10 mastery — the mirrored wordmark motif
      `<path d="M120 88V32l40 34 40-34v56" stroke="${c[1]}" stroke-opacity=".8" stroke-width="3" fill="none"/>
       <path d="M120 96v34l40-22 40 22V96" stroke="${c[1]}" stroke-opacity=".22" stroke-width="3" fill="none"/>
       <circle cx="272" cy="60" r="30" fill="url(#cg10)"/>`
    ][(n - 1) % 10];
    return `<svg viewBox="0 0 400 120" preserveAspectRatio="xMidYMid slice">${bg}${g.replace(/cg\d+/g, 'cg' + n).replace(/cf\d+/g, 'cf' + n)}${art.replace(/cg\d+/g, 'cg' + n).replace(/cf\d+/g, 'cf' + n)}</svg>`;
  }

  /* ==========================================================================
     CLIENT PORTRAITS
     A portrait is not an icon. Each of the women keeps her own face — skin,
     hair, the neckline she chose that morning, the one or two marks that make
     her herself — and on top of that she is drawn in the state she is actually
     in. Brow, eyelid, gaze, lip, the tilt of the head and the set of the
     shoulders all move with her posture, so the same client is visibly a
     different person when she is withdrawn from when she is open.

     Nothing here attempts a photograph. It is a drawing, printed on the same
     porcelain paper as the rest of the product: warm ink, soft edges, a little
     grain, and no outline heavier than it needs to be. It has to read at forty
     pixels in a list and hold up at a hundred and twenty beside a consultation.
     ========================================================================== */

  /* Colour kitchen. Every tone in a portrait is mixed from that woman's own
     two or three colours, so nothing arrives from outside the palette. */
  const _hx = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const _hex = a => '#' + a.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = _hx(a), B = _hx(b); return _hex(A.map((v, i) => v + (B[i] - v) * t)); };
  const deep = (c, t) => mix(c, '#2A1D16', t);
  const lift = (c, t) => mix(c, '#FFF3E4', t);

  const FACES = {
    sofia:  { fw: 1.00, fh: 1.00, skin: '#E9D2BC', hair: '#3B2A22', cloth: '#A07E3C', style: 'bob',      neck: 'v',      eye: '#4A342A', lip: '#BE8375', jewel: 'necklace', mark: true },
    carmen: { fw: 0.96, fh: 1.02, skin: '#EBDCCB', hair: '#7E7871', cloth: '#47725D', style: 'chignon',  neck: 'collar', eye: '#5A5048', lip: '#C09189', jewel: 'studs' },
    shira:  { fw: 0.94, fh: 1.03, skin: '#E2C8AF', hair: '#2E2620', cloth: '#A34D53', style: 'long',     neck: 'round',  eye: '#3A2A22', lip: '#B87A72', jewel: 'necklace' },
    beatriz:{ fw: 0.99, fh: 1.01, skin: '#D9BA9B', hair: '#241E19', cloth: '#C9A45C', style: 'sleek',    neck: 'v',      eye: '#33251E', lip: '#B0736C', jewel: 'studs' },
    isabel: { fw: 1.05, fh: 0.97, skin: '#F0E1D2', hair: '#5A4A3C', cloth: '#2E4A63', style: 'crop',     neck: 'collar', eye: '#4E5A52', lip: '#C2938C' },
    lucia:  { fw: 1.02, fh: 1.00, skin: '#E3CBB2', hair: '#4A3226', cloth: '#7A5E8A', style: 'waves',    neck: 'round',  eye: '#4A382A', lip: '#BC8279', jewel: 'necklace' },
    nuria:  { fw: 1.04, fh: 0.98, skin: '#E9D5C0', hair: '#8A6A4A', cloth: '#6E8F72', style: 'curls',    neck: 'round',  eye: '#6A5236', lip: '#C08B80' },
    teresa: { fw: 0.96, fh: 1.01, skin: '#E5CFBA', hair: '#2A2320', cloth: '#8C4A3A', style: 'ponytail', neck: 'wrap',   eye: '#352A22', lip: '#B57A70', asym: true },
    pilar:  { fw: 1.01, fh: 1.00, skin: '#E2CAB4', hair: '#3E3128', cloth: '#4A5C7A', style: 'layered',  neck: 'collar', eye: '#3E2F26', lip: '#B98079', shadow: true },
    marta:  { fw: 1.03, fh: 0.99, skin: '#EADCCB', hair: '#6B4F3A', cloth: '#A07E3C', style: 'halfup',   neck: 'round',  eye: '#5A422E', lip: '#C08C82', jewel: 'studs' },
    generic:{ fw: 1.00, fh: 1.00, skin: '#E6D5C2', hair: '#4A403A', cloth: '#8E8B86', style: 'layered',  neck: 'round',  eye: '#443A32', lip: '#BC8C84' }
  };

  /* Every posture any of the nine cases can hold, drawn rather than labelled.
     tilt/drop move the head, brow/browOut set the eyebrow, lid closes the eye,
     gaze turns it away, mouth curves it, sx/sy set the shoulders and fold adds
     the arms she has folded across herself. */
  const POSTURE_STATE = {
    open:            { tilt:  0,   drop: -0.7, brow: -0.7, browOut: -0.5, lid: 0.00, gaze:  0,   gazeY:  0,   mouth:  2.6, mw: 9.2, sx:  0,   sy: -1.0, fold: 0, tone: 'sage' },
    opening:         { tilt: -1.5, drop: -0.4, brow: -0.4, browOut: -0.2, lid: 0.10, gaze:  0.2, gazeY:  0,   mouth:  1.6, mw: 8.4, sx:  0.4, sy: -0.5, fold: 0, tone: 'sage' },
    engaged:         { tilt: -2.5, drop: -0.7, brow: -1.0, browOut: -0.3, lid: 0.00, gaze:  0,   gazeY: -0.4, mouth:  1.9, mw: 8.6, sx:  0.7, sy: -1.2, fold: 0, tone: 'sage' },
    attentive:       { tilt: -1.0, drop: -0.5, brow: -0.6, browOut: -0.2, lid: 0.02, gaze:  0,   gazeY: -0.3, mouth:  0.9, mw: 8.0, sx:  0,   sy: -0.7, fold: 0, tone: 'sage' },
    resolved:        { tilt:  0,   drop: -0.4, brow: -0.1, browOut:  0.1, lid: 0.08, gaze:  0,   gazeY:  0,   mouth:  1.7, mw: 8.6, sx:  0,   sy: -0.7, fold: 0, tone: 'sage' },
    decided:         { tilt:  0,   drop: -0.6, brow:  0.4, browOut:  0.0, lid: 0.06, gaze:  0,   gazeY:  0,   mouth:  1.2, mw: 8.4, sx:  0,   sy: -1.0, fold: 0, tone: 'sage' },
    familiar:        { tilt: -3.0, drop: -0.2, brow: -0.3, browOut: -0.4, lid: 0.14, gaze:  0.3, gazeY:  0,   mouth:  3.0, mw: 9.6, sx:  0.9, sy: -0.3, fold: 0, tone: 'gold' },
    compliant:       { tilt:  1.5, drop:  0.2, brow: -0.9, browOut: -0.1, lid: 0.10, gaze:  0,   gazeY:  0.3, mouth:  2.3, mw: 9.0, sx:  0,   sy:  0.2, fold: 0, tone: 'gold' },
    deferential:     { tilt:  3.2, drop:  0.7, brow: -1.1, browOut: -0.2, lid: 0.28, gaze: -0.6, gazeY:  0.9, mouth:  0.8, mw: 7.6, sx: -0.7, sy:  0.7, fold: 0, tone: 'gold' },
    polite:          { tilt:  0,   drop:  0,   brow: -0.2, browOut: -0.1, lid: 0.16, gaze:  0,   gazeY:  0,   mouth:  0.9, mw: 7.6, sx:  0,   sy:  0,   fold: 0, tone: 'mercury' },
    reserved:        { tilt:  0.6, drop:  0.5, brow: -0.4, browOut:  0.2, lid: 0.34, gaze: -1.0, gazeY:  0.5, mouth: -0.5, mw: 6.8, sx: -0.9, sy:  0.5, fold: 1, tone: 'mercury' },
    tentative:       { tilt:  2.2, drop:  0.4, brow: -1.3, browOut:  0.0, lid: 0.26, gaze: -0.8, gazeY:  0.6, mouth:  0.2, mw: 7.0, sx: -0.5, sy:  0.4, fold: 0, tone: 'mercury' },
    reflective:      { tilt: -2.2, drop:  0.1, brow: -0.2, browOut:  0.3, lid: 0.30, gaze: -1.2, gazeY: -0.7, mouth:  0.3, mw: 7.4, sx:  0,   sy:  0,   fold: 0, tone: 'mercury' },
    considering:     { tilt: -2.6, drop:  0.1, brow:  0.2, browOut:  0.4, lid: 0.24, gaze:  1.2, gazeY: -0.6, mouth:  0.1, mw: 7.4, sx:  0.2, sy:  0,   fold: 0, tone: 'mercury' },
    selfDeprecating: { tilt:  4.2, drop:  0.6, brow: -1.5, browOut:  0.1, lid: 0.22, gaze: -0.9, gazeY:  0.8, mouth:  1.9, mw: 8.8, sx: -0.5, sy:  0.6, fold: 0, tone: 'gold' },
    guarded:         { tilt:  0,   drop:  0.3, brow:  1.0, browOut: -0.6, lid: 0.40, gaze: -0.5, gazeY:  0,   mouth: -1.0, mw: 6.6, sx: -0.3, sy: -0.5, fold: 2, tone: 'rose' },
    armored:         { tilt:  0,   drop:  0.2, brow:  1.4, browOut: -0.9, lid: 0.44, gaze:  0,   gazeY:  0,   mouth: -1.4, mw: 6.2, sx:  0,   sy: -1.1, fold: 2, tone: 'rose' },
    distrustful:     { tilt: -1.0, drop:  0.2, brow:  1.6, browOut: -0.4, lid: 0.50, gaze: -1.4, gazeY:  0,   mouth: -1.7, mw: 6.0, sx: -0.7, sy: -0.9, fold: 2, tone: 'rose' },
    testing:         { tilt: -3.6, drop:  0,   brow:  0.8, browOut: -1.2, lid: 0.30, gaze:  1.3, gazeY:  0,   mouth: -0.4, mw: 7.0, sx:  0.5, sy: -0.4, fold: 1, tone: 'rose' },
    evaluative:      { tilt: -4.2, drop:  0,   brow:  0.5, browOut: -1.4, lid: 0.36, gaze:  1.5, gazeY: -0.3, mouth: -0.2, mw: 7.2, sx:  0.6, sy: -0.3, fold: 1, tone: 'mercury' },
    withdrawn:       { tilt:  5.2, drop:  1.5, brow: -1.7, browOut:  0.7, lid: 0.56, gaze: -1.7, gazeY:  1.2, mouth: -2.1, mw: 6.0, sx: -1.8, sy:  1.8, fold: 2, tone: 'rose' },
    neutral:         { tilt:  0,   drop:  0,   brow:  0,   browOut:  0,   lid: 0.16, gaze:  0,   gazeY:  0,   mouth:  0.9, mw: 8.0, sx:  0,   sy:  0,   fold: 0, tone: 'mercury' }
  };
  const POSTURE_ALIAS = { 'self-deprecating': 'selfDeprecating', self_deprecating: 'selfDeprecating' };
  const TONE = { sage: '#47725D', gold: '#A07E3C', rose: '#A34D53', mercury: '#8E8B86' };
  let AVN = 0;

  /* --------------------------------------------------------------------------
     HAIR — the fastest way to tell one woman from another at forty pixels, so
     each of them keeps her own. `back` is the mass drawn behind the face and
     over the shoulders; `line` is her hairline, which together with the shared
     crown arc makes the hair that falls onto her forehead. The hairline is
     doing most of the work: a fringe, a centre part and a face scraped back
     are three different women before a single feature has been drawn.
     -------------------------------------------------------------------------- */
  const CROWN = 'M20.9 21.8C20.3 12.3 25.4 7.2 32 7.2s11.7 5.1 11.1 14.6';
  /* One solid mass of hair behind the face: `len` is where it ends at the
     sides, `mid` how high it arches behind her jaw, `r` how far it stands out
     from the head. Solid, because the face is drawn on top of it and a hollow
     shape only ever leaves a seam beside her cheek. */
  const mass = (fill, len, mid, r) => {
    const R = r || 47, L = 64 - R, f = v => Number(v).toFixed(1);
    return `<path d="M32 5.8C42.6 5.8 47.4 12.2 46.6 21.8 46.1 27.6 ${f(R - .4)} ${f(len - 10)} ${f(R)} ${f(len)} ${f(R - 3)} ${f(len + 1.6)} ${f(R - 6)} ${f(len + 1)} ${f(R - 7.5)} ${f(len - 2.5)} ${f(R - 9.5)} ${f(mid + 3)} ${f(R - 11)} ${f(mid)} 32 ${f(mid)} ${f(L + 11)} ${f(mid)} ${f(L + 9.5)} ${f(mid + 3)} ${f(L + 7.5)} ${f(len - 2.5)} ${f(L + 6)} ${f(len + 1)} ${f(L + 3)} ${f(len + 1.6)} ${f(L)} ${f(len)} ${f(L + .4)} ${f(len - 10)} 17.9 27.6 17.4 21.8 16.6 12.2 21.4 5.8 32 5.8Z" fill="${fill}"/>`;
  };
  const HAIR = {
    /* chin-length bob, parted to one side and swept across */
    bob: (c, hi, lo) => ({
      back: mass(c, 39, 30.5, 47) + `<path d="M43.4 25.6c.4 4.8.4 9.2-.2 12.6" stroke="${hi}" stroke-opacity=".3" stroke-width="1" fill="none" stroke-linecap="round"/>`,
      line: `C42.4 17 40 14.6 36.4 14.9 31.8 15.4 26.4 17 23.6 19.9 22.6 21 21.5 21.9 20.9 21.8Z`,
      top: `<path d="M25.6 11.6c3.9-2.1 9.1-2.2 13 0" stroke="${hi}" stroke-opacity=".34" stroke-width="1.1" fill="none" stroke-linecap="round"/>`
    }),
    /* scraped back into a low chignon at the nape */
    chignon: (c, hi, lo) => ({
      ears: true,
      back: mass(c, 30, 24, 44.2) + `<ellipse cx="45.6" cy="23.4" rx="5.6" ry="5" fill="${lo}"/>
        <path d="M41.4 17.8c3.4 1 5 3.4 4.8 6.6" stroke="${hi}" stroke-opacity=".28" stroke-width=".9" fill="none"/>`,
      line: `C42.6 16.2 39.4 14.2 32 14.2 24.6 14.2 21.3 16.2 20.9 21.8Z`,
      top: `<path d="M23.2 18.2c3.2-2.6 14.4-2.8 17.6-.2M24.6 14.4c3.7-2.3 11.1-2.4 14.8-.2" stroke="${hi}" stroke-opacity=".32" stroke-width=".85" fill="none" stroke-linecap="round"/>`
    }),
    /* long, centre-parted, falling well past the shoulders */
    long: (c, hi, lo) => ({
      back: mass(c, 50, 30, 48) + `<path d="M44.6 27.4c.6 8.2.8 15.8.4 22.4M19.4 27.4c-.6 8.2-.8 15.8-.4 22.4" stroke="${hi}" stroke-opacity=".26" stroke-width="1" fill="none" stroke-linecap="round"/>`,
      line: `C42.4 16.6 39.6 14.2 36 14.5 34 14.6 33 14.2 32 13.5 31 14.2 30 14.6 28 14.5 24.4 14.2 21.3 16.6 20.9 21.8Z`,
      top: `<path d="M32 13.5V7.4" stroke="${lo}" stroke-opacity=".45" stroke-width=".9"/>`
    }),
    /* pulled back tight and knotted high — the most composed silhouette */
    sleek: (c, hi, lo) => ({
      ears: true,
      back: mass(c, 27.5, 23, 43.6) + `<circle cx="32" cy="6.1" r="4.7" fill="${lo}"/>
        <path d="M27.7 3.9c2.6-1.4 6-1.4 8.6.2" stroke="${hi}" stroke-opacity=".3" stroke-width=".9" fill="none"/>`,
      line: `C42.7 15.8 39.2 13.6 32 13.6 24.8 13.6 21.3 15.8 20.9 21.8Z`,
      top: `<path d="M23.6 17.2c3.5-2.5 13.3-2.6 16.8-.2M25 13.6c3.3-2 10.2-2.1 13.7-.2" stroke="${hi}" stroke-opacity=".34" stroke-width=".85" fill="none" stroke-linecap="round"/>`
    }),
    /* a short crop, cut close at the nape */
    crop: (c, hi, lo) => ({
      back: mass(c, 28.5, 24, 44.8),
      line: `C42.8 18.2 41.7 15.8 40 14.6 37.6 16.9 33.6 17.5 29.4 16.7 26.6 16.3 24.5 17.7 23.3 20.3 22.5 21.3 21.5 21.9 20.9 21.8Z`,
      top: `<path d="M26.4 10.8c3.5-2.2 8.8-2.3 12.3 0" stroke="${hi}" stroke-opacity=".32" stroke-width="1" fill="none" stroke-linecap="round"/>`
    }),
    /* shoulder-length waves, swept across */
    waves: (c, hi, lo) => ({
      back: mass(c, 43.5, 30, 48) + `<path d="M44.4 27.6c.7 5 .6 10-.3 14.2M19.6 27.6c-.7 5-.6 10 .3 14.2" stroke="${hi}" stroke-opacity=".28" stroke-width="1.1" fill="none" stroke-linecap="round"/>`,
      line: `C42.4 17.2 40 14.6 36.6 14.4 32 14.2 27.4 16 24.2 19.6 23.2 20.7 21.6 21.9 20.9 21.8Z`,
      top: `<path d="M24.6 12.8c3.9-2.6 9.8-2.8 13.9-.6" stroke="${hi}" stroke-opacity=".34" stroke-width="1.1" fill="none" stroke-linecap="round"/>`
    }),
    /* a halo of curls */
    curls: (c, hi, lo) => ({
      back: mass(c, 33, 27, 45.4) + [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
        const a = (-188 + i * 25) * Math.PI / 180;
        return `<circle cx="${(32 + Math.cos(a) * 13).toFixed(1)}" cy="${(21.4 + Math.sin(a) * 13.8).toFixed(1)}" r="5.4" fill="${i % 3 === 1 ? lo : c}"/>`;
      }).join('') + `<circle cx="19.8" cy="28.8" r="4.6" fill="${c}"/><circle cx="44.2" cy="28.8" r="4.6" fill="${lo}"/>`,
      line: `C42.6 17.6 40.4 15.2 37 15.6 34.6 17.2 31 17.4 28.4 16.2 25 15.8 21.9 17.8 20.9 21.8Z`,
      top: `<circle cx="25.4" cy="11" r="3.2" fill="${c}"/><circle cx="32" cy="8.6" r="3.4" fill="${hi}" fill-opacity=".45"/><circle cx="38.6" cy="11" r="3.2" fill="${c}"/>`
    }),
    /* pulled back with the tail brought over one shoulder */
    ponytail: (c, hi, lo) => ({
      ears: true,
      back: mass(c, 29, 23.5, 44) + `<path d="M43.8 19.4c4.4 2 6.2 7.2 5.3 13.8-.6 4.8-1.7 9-3.1 12.6-1.9.4-3.6 0-5.1-1.2 1.8-4.4 2.9-8.8 3.2-13.2.2-3.8-.1-7.4-.3-12Z" fill="${c}"/>
        <path d="M45.6 24c1 4.2 1 8.6-.1 13.2" stroke="${hi}" stroke-opacity=".28" stroke-width="1" fill="none" stroke-linecap="round"/>`,
      line: `C42.6 16 39.4 13.9 32.2 13.9 25.6 13.9 21.9 16.4 20.9 21.8Z`,
      top: `<path d="M23.8 17.4c3.6-2.6 13.6-2.9 17.2-.6M27.4 8.2c-.7 1.9-1 3.6-1.1 5.1" stroke="${hi}" stroke-opacity=".32" stroke-width=".9" fill="none" stroke-linecap="round"/>`
    }),
    /* mid-length and layered, with a soft full fringe */
    layered: (c, hi, lo) => ({
      back: mass(c, 38.5, 30.5, 46.4) + `<path d="M43.1 26c.4 4.4.4 8.5-.2 11.6M20.9 26c-.4 4.4-.4 8.5.2 11.6" stroke="${hi}" stroke-opacity=".28" stroke-width="1" fill="none" stroke-linecap="round"/>`,
      line: `C42.7 17.2 41.1 14.9 38.6 15.5 35 16.5 28.6 16.7 25.4 15.5 23.4 16.5 21.7 18.9 20.9 21.8Z`,
      top: `<path d="M25.7 11.2c3.9-2.2 8.8-2.3 12.6-.2" stroke="${hi}" stroke-opacity=".34" stroke-width="1.1" fill="none" stroke-linecap="round"/>`
    }),
    /* half up, twisted back and pinned */
    halfup: (c, hi, lo) => ({
      back: mass(c, 40.5, 30.5, 47.4),
      line: `C42.6 17.4 40.6 14.6 36.6 14.8 34.4 16.2 29.6 16.2 27.4 14.8 23.4 14.6 21.3 17.4 20.9 21.8Z`,
      top: `<ellipse cx="32" cy="7.4" rx="5.2" ry="3.2" fill="${lo}"/>
        <path d="M27.6 9.4c2.6-2 6.2-2 8.8 0" stroke="${hi}" stroke-opacity=".32" stroke-width=".9" fill="none" stroke-linecap="round"/>`
    })
  };

  /* --------------------------------------------------------------------------
     What she is wearing. A neckline and a collar say more about a woman in a
     clinic chair than a logo does, so each of them has her own.
     -------------------------------------------------------------------------- */
  function garment(f) {
    const c = f.cloth, hiC = lift(c, 0.26), loC = deep(c, 0.26);
    const body = `<path d="M-2 66C-2 54.6 5.6 47.4 16.8 44.7l6.7-1.6c2.5 3.6 14.5 3.6 17 0l6.7 1.6C58.4 47.4 66 54.6 66 66Z" fill="${c}"/>
      <path d="M-2 66c0-9.6 5.4-16.2 14-19.4-3 4.4-4.6 11-4.8 19.4ZM66 66c0-9.6-5.4-16.2-14-19.4 3 4.4 4.6 11 4.8 19.4Z" fill="${loC}" opacity=".26"/>`;
    const shade = `<path d="M23.5 43.1c2.5 3.6 14.5 3.6 17 0 1.3 2.4-2.6 5.2-8.5 5.2s-9.8-2.8-8.5-5.2Z" fill="${deep(f.skin, 0.34)}" opacity=".3"/>`;
    let neck = '';
    if (f.neck === 'v') {
      neck = `<path d="M26 44.1c2.1 2.6 4 5.6 6 9.2 2-3.6 3.9-6.6 6-9.2-3.4 2.2-8.6 2.2-12 0Z" fill="${f.skin}"/>
        <path d="M26 44.1c2.1 2.6 4 5.6 6 9.2 2-3.6 3.9-6.6 6-9.2" fill="none" stroke="${hiC}" stroke-width=".9" stroke-opacity=".8"/>`;
    } else if (f.neck === 'collar') {
      neck = `<path d="M23.6 43.3 32 49.2l-3.6 3.2-8.6-6.2Zm16.8 0L32 49.2l3.6 3.2 8.6-6.2Z" fill="${hiC}"/>
        <path d="M23.6 43.3 32 49.2l8.4-5.9" fill="none" stroke="${loC}" stroke-width=".7" stroke-opacity=".55"/>`;
    } else if (f.neck === 'wrap') {
      neck = `<path d="M24.2 44.6c5.4 4.8 11.8 7.6 19.2 8.4l-.4 3.4c-8.4-.9-15.5-4.2-21.4-9.8Z" fill="${hiC}" opacity=".8"/>`;
    } else {
      neck = `<path d="M23.5 43.1c2.5 3.6 14.5 3.6 17 0" fill="none" stroke="${hiC}" stroke-width="1" stroke-opacity=".7"/>`;
    }
    const jewel = f.jewel === 'necklace'
      ? `<path d="M26.8 45.4c1.8 3 8.6 3 10.4 0" fill="none" stroke="#C9A45C" stroke-width=".8" stroke-opacity=".95"/>
         <circle cx="32" cy="48" r="1.1" fill="#C9A45C"/>` : '';
    return shade + body + neck + jewel;
  }

  /* One drawing of one woman in one state: everything inside the porcelain
     circle. Kept separate so a change of posture can cross-fade between two
     of them instead of snapping. */
  function portraitScene(f, p, tone, id, grain) {
    const n = v => Number(v).toFixed(2);
    const skin = f.skin, shadeSkin = deep(skin, 0.3), lash = deep(f.hair, 0.2);
    const hi = lift(f.hair, 0.3), lo = deep(f.hair, 0.32);
    const hair = (HAIR[f.style] || HAIR.layered)(f.hair, hi, lo);

    /* the eye: a lens whose upper lid falls with the posture and an iris that
       looks where she is looking. A narrowed eye that has turned away is the
       whole difference between a woman assessing you and a woman who has
       stopped, and it has to survive being forty pixels wide. */
    const ey = 24.8, w = 3.05, up = 2.55 * (1 - p.lid * 0.86), dn = 1.4 - p.lid * 0.4;
    const eye = (cx, side) => {
      const almond = `M${n(cx - w)} ${n(ey)}C${n(cx - w * .55)} ${n(ey - up)} ${n(cx + w * .55)} ${n(ey - up)} ${n(cx + w)} ${n(ey)}C${n(cx + w * .5)} ${n(ey + dn)} ${n(cx - w * .5)} ${n(ey + dn)} ${n(cx - w)} ${n(ey)}Z`;
      const ix = cx + p.gaze * 1.1, iy = ey - 0.2 + p.gazeY * 0.55;
      const r = 1.85;
      return `<path d="${almond}" fill="#FCF8F1"/>
        <clipPath id="e${side}${id}"><path d="${almond}"/></clipPath>
        <g clip-path="url(#e${side}${id})">
          <circle cx="${n(ix)}" cy="${n(iy)}" r="${r}" fill="${f.eye}"/>
          <circle cx="${n(ix)}" cy="${n(iy + .3)}" r="${r * .82}" fill="${deep(f.eye, .42)}" opacity=".5"/>
          <circle cx="${n(ix)}" cy="${n(iy)}" r=".82" fill="#1B1410"/>
          <circle cx="${n(ix - .62)}" cy="${n(iy - .68)}" r=".36" fill="#FFFFFF" opacity=".85"/>
        </g>
        <path d="M${n(cx - w)} ${n(ey)}C${n(cx - w * .55)} ${n(ey - up)} ${n(cx + w * .55)} ${n(ey - up)} ${n(cx + w)} ${n(ey)}"
          fill="none" stroke="${lash}" stroke-opacity=".9" stroke-width="${n(.78 + p.lid * .6)}" stroke-linecap="round"/>
        <path d="M${n(cx + side * (w - .1))} ${n(ey - .1)}l${n(side * 1.35)} ${n(-.5 - p.lid * .3)}"
          fill="none" stroke="${lash}" stroke-opacity=".6" stroke-width=".6" stroke-linecap="round"/>
        <path d="M${n(cx - w * .92)} ${n(ey - up - 1.1)}C${n(cx - w * .4)} ${n(ey - up - 1.95)} ${n(cx + w * .4)} ${n(ey - up - 1.95)} ${n(cx + w * .92)} ${n(ey - up - 1.1)}"
          fill="none" stroke="${shadeSkin}" stroke-opacity=".32" stroke-width=".5"/>`;
    };

    const brow = (xi, xo, ci, co) => `<path d="M${n(xi)} ${n(19.9 + p.brow)}C${n(ci)} ${n(18.5 + p.brow * .5)} ${n(co)} ${n(18.3 + p.browOut * .5)} ${n(xo)} ${n(19.5 + p.browOut)}"
      fill="none" stroke="${deep(f.hair, .12)}" stroke-opacity=".88" stroke-width="1.4" stroke-linecap="round"/>`;

    // the mouth, drawn as two lips rather than one line: they press thin when
    // she closes and fill out when she warms.
    const mh = p.mw / 2, dip = p.mouth, my = 34.2 - dip * 0.12;
    const mx0 = 32 - mh, mx1 = 32 + mh, tick = dip >= 0 ? -0.7 : 0.7;
    const upperLip = `M${n(mx0)} ${n(my)}Q32 ${n(my + dip * .5)} ${n(mx1)} ${n(my)}`;
    const mouth = `<path d="${upperLip}Q32 ${n(my + dip + 1.66)} ${n(mx0)} ${n(my)}Z" fill="${f.lip}" fill-opacity=".8"/>
      <path d="${upperLip}" fill="none" stroke="${deep(f.lip, .34)}" stroke-opacity=".78" stroke-width=".7" stroke-linecap="round"/>
      <path d="M${n(mx0)} ${n(my)}l-.9 ${n(tick * .85)}M${n(mx1)} ${n(my)}l.9 ${n(tick * .85)}"
        fill="none" stroke="${deep(f.lip, .42)}" stroke-opacity=".7" stroke-width=".7" stroke-linecap="round"/>
      <ellipse cx="32" cy="${n(my + dip * .6 + 1.05)}" rx="${n(mh * .4)}" ry=".4" fill="#FFFFFF" opacity=".18"/>`;

    /* What she has done with her arms. One forearm across her is a woman
       holding herself a little; both, with her hands showing, is a woman
       who has closed the conversation with her body. */
    const armLo = deep(f.cloth, .2), armHi = deep(f.cloth, .36), armEdge = lift(f.cloth, .24);
    const folds = p.fold >= 1
      ? `<g transform="rotate(-6 32 53)"><rect x="6" y="49.4" width="52" height="7.4" rx="3.7" fill="${armLo}"/>
         <path d="M8 50.9c12-1.7 34-1.7 46 0" fill="none" stroke="${armEdge}" stroke-opacity=".45" stroke-width=".85"/></g>` : '';
    const folds2 = p.fold >= 2
      ? `<g transform="rotate(-6 32 53)"><ellipse cx="53" cy="53.1" rx="4.2" ry="3" fill="${deep(skin, .07)}"/>
         <path d="M49.6 51.2c1.4-.9 3.3-.9 4.8.1" fill="none" stroke="${deep(skin, .26)}" stroke-opacity=".5" stroke-width=".55"/></g>
         <g transform="rotate(6 32 57.6)"><rect x="8" y="54" width="50" height="7.4" rx="3.7" fill="${armHi}"/>
         <path d="M10 55.5c11-1.6 32-1.6 44 0" fill="none" stroke="${armEdge}" stroke-opacity=".32" stroke-width=".85"/>
         <ellipse cx="11.4" cy="57.7" rx="4.2" ry="3" fill="${skin}"/>
         <path d="M8 56c1.5-1 3.4-1 4.9 0" fill="none" stroke="${deep(skin, .26)}" stroke-opacity=".5" stroke-width=".55"/></g>` : '';

    const face = `<path d="M32 10.6C25.9 10.6 22.6 14.8 22.7 21.8c.1 5.3.9 9.6 3 13 1.7 2.7 4 3.8 6.3 3.8s4.6-1.1 6.3-3.8c2.1-3.4 2.9-7.7 3-13 .1-7-3.2-11.2-9.3-11.2Z" fill="${skin}"/>`;
    const ears = `<path d="M23.1 23.4c-2-.6-3.2.7-2.8 2.7.4 2 1.8 3.4 3.4 3.4Zm17.8 0c2-.6 3.2.7 2.8 2.7-.4 2-1.8 3.4-3.4 3.4Z" fill="${deep(skin, .05)}"/>
      ${f.jewel === 'studs' ? `<circle cx="21.2" cy="29" r=".95" fill="#C9A45C"/><circle cx="42.8" cy="29" r=".95" fill="#C9A45C"/>` : ''}`;

    return `<circle cx="32" cy="32" r="31" fill="url(#g${id})"/>
      <circle cx="22" cy="17" r="30" fill="url(#l${id})"/>
      <g transform="translate(${n(p.sx * 2.1)} ${n(p.sy * 2.1)})">
        <path d="M27.4 31.6v8.6c0 2.3-1.7 3.4-3.6 4.1h16.4c-1.9-.7-3.6-1.8-3.6-4.1v-8.6Z" fill="${deep(skin, .07)}"/>
        ${garment(f)}
      </g>
      <g transform="rotate(${n(p.tilt)} 32 40) translate(${n(p.sx * .9)} ${n(p.drop * 1.7)}) translate(32 28) scale(${n(f.fw || 1)} ${n(f.fh || 1)}) translate(-32 -28)">
        ${hair.ears ? hair.back + ears : ears + hair.back}
        ${face}
        <path d="M38 34.8c2.1-3.4 2.9-7.7 3-13 .5 6-.2 11.2-2.3 15.1Z" fill="${shadeSkin}" opacity=".24"/>
        <ellipse cx="32" cy="15.4" rx="6" ry="3" fill="#FFF7EC" opacity=".16"/>
        <path d="${CROWN}${hair.line}" fill="${f.hair}"/>${hair.top}
        ${brow(29.4, 22.6, 27.2, 24.6)}${brow(34.6, 41.4, 36.8, 39.4)}
        ${eye(27.3, -1)}${eye(36.7, 1)}
        <path d="M31.5 26.6c-.3 2-.8 3.2-1.5 4 .7.8 1.9 1 3 .6" fill="none" stroke="${shadeSkin}" stroke-opacity=".48" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round"/>
        <ellipse cx="26.2" cy="29.8" rx="3" ry="1.8" fill="${mix(skin, '#C98A8E', .6)}" opacity="${n(.13 + Math.max(0, p.mouth) * .025)}"/>
        <ellipse cx="37.8" cy="29.8" rx="3" ry="1.8" fill="${mix(skin, '#C98A8E', .6)}" opacity="${n(.13 + Math.max(0, p.mouth) * .025)}"/>
        ${mouth}
        ${f.mark ? `<circle cx="26.4" cy="31.8" r=".55" fill="${deep(skin, .52)}" opacity=".7"/>` : ''}
        ${f.asym ? `<path d="M37.2 31.8c.9 1.4.9 2.7.1 3.9" fill="none" stroke="${shadeSkin}" stroke-opacity=".32" stroke-width=".6" stroke-linecap="round"/>` : ''}
        ${f.shadow ? `<ellipse cx="27.3" cy="27.7" rx="2.6" ry="1.05" fill="${shadeSkin}" opacity=".2"/><ellipse cx="36.7" cy="27.7" rx="2.6" ry="1.05" fill="${shadeSkin}" opacity=".2"/>` : ''}
      </g>
      <g transform="translate(${n(p.sx * 2.1)} ${n(p.sy * 2.1)})">${folds}${folds2}</g>
      <circle cx="32" cy="32" r="31" fill="url(#v${id})"/>
      ${grain ? `<rect width="64" height="64" filter="url(#n${id})" opacity=".07"/>` : ''}`;
  }

  /* Remembers the state each portrait was last drawn in, so that when the same
     woman comes back in a different posture the drawing changes rather than
     being replaced. This is the moment the practitioner learns that what she
     said cost her something; it is worth half a second. */
  const AV_LAST = {};

  function avatar(key, size, posture) {
    const f = FACES[key] || FACES.generic;
    const pk = POSTURE_ALIAS[posture] || posture;
    const p = POSTURE_STATE[pk] || POSTURE_STATE.neutral;
    const s = size || 54;
    const id = 'av' + (++AVN);
    const tone = TONE[p.tone] || TONE.mercury;
    const grain = s >= 54;

    // Only a portrait large enough to be looked at is worth transitioning; the
    // forty-pixel ones in a list are identity, not news.
    const slot = (key || 'generic') + ':' + Math.round(s);
    const prevKey = s >= 56 ? AV_LAST[slot] : null;
    if (s >= 56) AV_LAST[slot] = pk || 'neutral';
    const moved = prevKey && prevKey !== (pk || 'neutral') && POSTURE_STATE[prevKey];

    const defs = (sid, t) => `<linearGradient id="g${sid}" x1="0" y1="0" x2=".3" y2="1">
        <stop offset="0" stop-color="${mix(t, '#FFFFFF', .74)}"/>
        <stop offset="1" stop-color="#F6F2EC"/></linearGradient>
      <radialGradient id="l${sid}" cx=".5" cy=".5" r=".5">
        <stop offset="0" stop-color="#FFFFFF" stop-opacity=".55"/>
        <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient>
      <radialGradient id="v${sid}" cx=".5" cy=".5" r=".5">
        <stop offset=".62" stop-color="${t}" stop-opacity="0"/>
        <stop offset="1" stop-color="${t}" stop-opacity=".16"/></radialGradient>`;

    const noise = sid => `<filter id="n${sid}" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency=".92" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="matrix" values="0 0 0 0 .55 0 0 0 0 .48 0 0 0 0 .40 0 0 0 .5 0"/>
      </filter>`;

    let inner, defsOut = defs(id, tone) + (grain ? noise(id) : '');
    if (moved) {
      const pid = id + 'p', pp = POSTURE_STATE[prevKey];
      const ptone = TONE[pp.tone] || TONE.mercury;
      defsOut += defs(pid, ptone) + (grain ? noise(pid) : '');
      inner = `<g class="pvwas">${portraitScene(f, pp, ptone, pid, grain)}</g>
               <g class="pvnow">${portraitScene(f, p, tone, id, grain)}</g>`;
    } else {
      inner = portraitScene(f, p, tone, id, grain);
    }

    return `<svg width="${s}" height="${s}" viewBox="0 0 64 64" class="portrait${moved ? ' moved' : ''}" data-posture="${esc(pk || 'neutral')}" aria-hidden="true">
      <defs><clipPath id="c${id}"><circle cx="32" cy="32" r="31"/></clipPath>${defsOut}</defs>
      <g clip-path="url(#c${id})">${inner}</g>
      <circle cx="32" cy="32" r="30.1" fill="none" stroke="#FFFFFF" stroke-opacity=".5" stroke-width="1.2"/>
      <circle cx="32" cy="32" r="31" fill="none" stroke="${tone}" stroke-opacity=".34"/>
    </svg>`;
  }

  /* ---------- progress ring ---------------------------------------------- */
  function ring(done, total) {
    const pct = total ? done / total : 0;
    const r = 15, c = 2 * Math.PI * r;
    return `<svg class="ring" viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="${r}" fill="none" stroke="#EFEAE2" stroke-width="3"/>
      ${pct <= 0 ? '' : `<circle class="ringarc" cx="17" cy="17" r="${r}" fill="none" stroke="${pct >= 1 ? '#47725D' : '#A07E3C'}" stroke-width="3"
        pathLength="1" stroke-dasharray="${pct.toFixed(3)} 1" stroke-dashoffset="${pct.toFixed(3)}" stroke-linecap="round" transform="rotate(-90 17 17)"/>`}
      <text x="17" y="21" text-anchor="middle" font-size="10" font-weight="700" fill="#5C544C">${done}</text></svg>`;
  }

  /* ---------- signal glyphs (Module 3, lesson 6) -------------------------- */
  function glyph(kind, on) {
    const col = on ? '#C9A45C' : '#A07E3C';
    const g = {
      hand:   '<path d="M10 26V14a2 2 0 114 0v6m0 0V9a2 2 0 114 0v11m0 0V12a2 2 0 114 0v9m0 0v-5a2 2 0 114 0v10c0 5-4 9-9 9h-3c-5 0-8-4-8-8v-6" />',
      mirror: '<ellipse cx="16" cy="14" rx="9" ry="11"/><path d="M16 25v7M11 32h10"/>',
      phone:  '<rect x="9" y="4" width="14" height="24" rx="3"/><path d="M14 24h4"/>',
      short:  '<path d="M6 10h20M6 17h12M6 24h5"/>',
      laugh:  '<circle cx="16" cy="16" r="12"/><path d="M11 20q5 5 10 0M12 13h.01M20 13h.01"/>',
      correct:'<path d="M6 20l6-6 6 6M26 12l-6 6-6-6"/>',
      pause:  '<path d="M12 8v16M20 8v16"/>'
    }[kind] || '<circle cx="16" cy="16" r="10"/>';
    return `<svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="${col}" stroke-width="1.7"
      stroke-linecap="round" stroke-linejoin="round">${g}</svg>`;
  }

  /* ---------- teaching diagrams ------------------------------------------ */
  const DIAGRAMS = {
    /* Six book steps on the left, eight architecture phases on the right, with
       the joins drawn. The point of the picture is that the joins are not 1:1. */
    'two-mirrors': (t) => {
      const LY = i => 34 + i * 36, RY = i => 22 + i * 29;
      const LINKS = [[0, 0], [0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [5, 7]];
      const LETTERS = ['M', 'I', 'R', 'R', 'O', 'R'];
      return `<svg viewBox="0 0 520 268" class="dg">
        <text x="88" y="16" text-anchor="middle" font-size="9.5" letter-spacing="1.8" fill="#A07E3C">${t.leftHead}</text>
        <text x="424" y="16" text-anchor="middle" font-size="9.5" letter-spacing="1.8" fill="#94897D">${t.rightHead}</text>
        ${LINKS.map(([l, r]) => {
          const y1 = LY(l) + 14, y2 = RY(r) + 12;
          return `<path d="M164 ${y1} C232 ${y1}, 262 ${y2}, 330 ${y2}" fill="none" stroke="#C9A45C" stroke-width="1" opacity=".55"/>`;
        }).join('')}
        ${LETTERS.map((ch, i) => `
          <rect x="14" y="${LY(i)}" width="150" height="28" rx="9" fill="#241E19"/>
          <text x="30" y="${LY(i) + 19}" font-size="13" font-family="Marcellus" fill="#C9A45C">${ch}</text>
          <text x="46" y="${LY(i) + 19}" font-size="11.5" fill="#EFEAE3">${t.steps[i]}</text>`).join('')}
        ${t.phases.map((p, i) => `
          <rect x="330" y="${RY(i)}" width="182" height="24" rx="7" fill="#FBF7EF" stroke="#E5DED4"/>
          <text x="341" y="${RY(i) + 16}" font-size="10" fill="#A07E3C">${i + 1}</text>
          <text x="356" y="${RY(i) + 16}" font-size="11" fill="#241E19">${p}</text>`).join('')}
        <text x="260" y="262" text-anchor="middle" font-size="10" fill="#94897D">${t.foot}</text>
      </svg>`;
    },
    'two-consultations': (t) => `
      <svg viewBox="0 0 520 190" class="dg">
        <rect x="8" y="20" width="240" height="150" rx="12" fill="#FBF7EF" stroke="#E5DED4"/>
        <rect x="272" y="20" width="240" height="150" rx="12" fill="#241E19"/>
        <text x="128" y="48" text-anchor="middle" font-size="11" letter-spacing="2" fill="#94897D">${t.a}</text>
        <text x="392" y="48" text-anchor="middle" font-size="11" letter-spacing="2" fill="#C9A45C">${t.b}</text>
        <text x="128" y="86" text-anchor="middle" font-size="14" fill="#241E19" font-family="Marcellus">${t.a1}</text>
        <text x="128" y="110" text-anchor="middle" font-size="14" fill="#241E19" font-family="Marcellus">${t.a2}</text>
        <text x="392" y="86" text-anchor="middle" font-size="14" fill="#EFEAE3" font-family="Marcellus">${t.b1}</text>
        <text x="392" y="110" text-anchor="middle" font-size="14" fill="#EFEAE3" font-family="Marcellus">${t.b2}</text>
        <text x="392" y="146" text-anchor="middle" font-size="11" fill="#877D71">${t.b3}</text>
        <path d="M250 95h20" stroke="#A07E3C" stroke-width="1.5"/><circle cx="260" cy="95" r="3" fill="#A07E3C"/>
      </svg>`,
    'three-entrances': (t) => `
      <svg viewBox="0 0 520 170" class="dg">
        ${[0, 1, 2].map((i) => {
          const x = 20 + i * 170, col = ['#8E8B86', '#A07E3C', '#A34D53'][i];
          return `<rect x="${x}" y="28" width="150" height="118" rx="12" fill="#fff" stroke="#E5DED4"/>
            <rect x="${x}" y="28" width="150" height="4" rx="2" fill="${col}"/>
            <text x="${x + 75}" y="62" text-anchor="middle" font-size="13" font-family="Marcellus" fill="#241E19">${t.names[i]}</text>
            <text x="${x + 75}" y="88" text-anchor="middle" font-size="11" fill="#5C544C">${t.signs[i]}</text>
            <text x="${x + 75}" y="120" text-anchor="middle" font-size="11" fill="${col}">${t.needs[i]}</text>`;
        }).join('')}
      </svg>`,
    'three-layers': (t) => `
      <svg viewBox="0 0 520 210" class="dg">
        <rect x="60" y="16" width="400" height="52" rx="10" fill="#FBF7EF" stroke="#E5DED4"/>
        <rect x="90" y="76" width="340" height="52" rx="10" fill="#F4EDDE" stroke="#E5D9BC"/>
        <rect x="120" y="136" width="280" height="56" rx="10" fill="#241E19"/>
        <text x="260" y="40" text-anchor="middle" font-size="11" letter-spacing="2" fill="#94897D">${t.l1}</text>
        <text x="260" y="58" text-anchor="middle" font-size="13" font-family="Marcellus" fill="#241E19">${t.d1}</text>
        <text x="260" y="100" text-anchor="middle" font-size="11" letter-spacing="2" fill="#A07E3C">${t.l2}</text>
        <text x="260" y="118" text-anchor="middle" font-size="13" font-family="Marcellus" fill="#241E19">${t.d2}</text>
        <text x="260" y="160" text-anchor="middle" font-size="11" letter-spacing="2" fill="#C9A45C">${t.l3}</text>
        <text x="260" y="180" text-anchor="middle" font-size="13" font-family="Marcellus" fill="#EFEAE3">${t.d3}</text>
        <path d="M40 30v150" stroke="#E5DED4"/><path d="M36 176l4 8 4-8" fill="#94897D"/>
        <text x="30" y="110" text-anchor="middle" font-size="10" fill="#94897D" transform="rotate(-90 30 110)">${t.axis}</text>
      </svg>`,
    'five-drives': (t) => `
      <svg viewBox="0 0 520 180" class="dg">
        <circle cx="260" cy="90" r="30" fill="#241E19"/>
        <text x="260" y="94" text-anchor="middle" font-size="11" fill="#C9A45C">${t.centre}</text>
        ${t.names.map((n, i) => {
          const a = (-90 + i * 72) * Math.PI / 180, x = 260 + Math.cos(a) * 108, y = 90 + Math.sin(a) * 62;
          return `<line x1="260" y1="90" x2="${x}" y2="${y}" stroke="#E5DED4"/>
            <rect x="${x - 52}" y="${y - 15}" width="104" height="30" rx="15" fill="#fff" stroke="#E5D9BC"/>
            <text x="${x}" y="${y + 4}" text-anchor="middle" font-size="11.5" fill="#5C544C">${n}</text>`;
        }).join('')}
      </svg>`,
    'discovery-funnel': (t) => `
      <svg viewBox="0 0 520 190" class="dg">
        <path d="M40 24h440l-96 62H136z" fill="#FBF7EF" stroke="#E5DED4"/>
        <path d="M136 96h248l-58 40H194z" fill="#F4EDDE" stroke="#E5D9BC"/>
        <path d="M194 146h132l-30 32h-72z" fill="#241E19"/>
        <text x="260" y="58" text-anchor="middle" font-size="12" fill="#5C544C">${t.s1}</text>
        <text x="260" y="120" text-anchor="middle" font-size="12" fill="#7E6229">${t.s2}</text>
        <text x="260" y="168" text-anchor="middle" font-size="12" fill="#EFEAE3">${t.s3}</text>
      </svg>`,
    'safety-scan': (t) => `
      <svg viewBox="0 0 520 200" class="dg">
        <circle cx="110" cy="100" r="58" fill="#241E19"/>
        <text x="110" y="96" text-anchor="middle" font-size="12" fill="#C9A45C">${t.centre1}</text>
        <text x="110" y="114" text-anchor="middle" font-size="12" fill="#C9A45C">${t.centre2}</text>
        ${t.checks.map((c, i) => {
          const y = 34 + i * 42;
          return `<path d="M170 100 C 220 100, 220 ${y + 14}, 250 ${y + 14}" stroke="#E5DED4" fill="none"/>
            <rect x="250" y="${y}" width="250" height="29" rx="14" fill="#fff" stroke="#E5D9BC"/>
            <text x="266" y="${y + 19}" font-size="12" fill="#5C544C">${c}</text>`;
        }).join('')}
        <text x="110" y="182" text-anchor="middle" font-size="10" letter-spacing="2" fill="#94897D">${t.time}</text>
      </svg>`,
    'double-diagnosis': (t) => `
      <svg viewBox="0 0 520 190" class="dg">
        <rect x="20" y="30" width="220" height="120" rx="14" fill="#241E19"/>
        <rect x="280" y="30" width="220" height="120" rx="14" fill="#FBF7EF" stroke="#E5DED4"/>
        <text x="130" y="58" text-anchor="middle" font-size="10" letter-spacing="2" fill="#C9A45C">${t.first}</text>
        <text x="130" y="84" text-anchor="middle" font-size="14" font-family="Marcellus" fill="#EFEAE3">${t.a1}</text>
        <text x="130" y="106" text-anchor="middle" font-size="12" fill="#BCB2A5">${t.a2}</text>
        <text x="130" y="128" text-anchor="middle" font-size="12" fill="#BCB2A5">${t.a3}</text>
        <text x="390" y="58" text-anchor="middle" font-size="10" letter-spacing="2" fill="#94897D">${t.second}</text>
        <text x="390" y="84" text-anchor="middle" font-size="14" font-family="Marcellus" fill="#241E19">${t.b1}</text>
        <text x="390" y="106" text-anchor="middle" font-size="12" fill="#5C544C">${t.b2}</text>
        <text x="390" y="128" text-anchor="middle" font-size="12" fill="#5C544C">${t.b3}</text>
        <path d="M244 90h32" stroke="#A07E3C" stroke-width="1.5"/>
        <path d="M270 85l8 5-8 5" fill="#A07E3C"/>
        <text x="260" y="172" text-anchor="middle" font-size="11" fill="#94897D">${t.note}</text>
      </svg>`,
    'three-closes': (t) => `
      <svg viewBox="0 0 520 180" class="dg">
        ${[0, 1, 2].map((i) => {
          const x = 16 + i * 168, col = ['#A34D53', '#8E8B86', '#47725D'][i];
          return `<rect x="${x}" y="26" width="152" height="126" rx="13" fill="#fff" stroke="#E5DED4"/>
            <rect x="${x}" y="26" width="152" height="4" rx="2" fill="${col}"/>
            <text x="${x + 76}" y="58" text-anchor="middle" font-size="13" font-family="Marcellus" fill="#241E19">${t.names[i]}</text>
            <text x="${x + 76}" y="84" text-anchor="middle" font-size="11" fill="#5C544C">${t.says[i]}</text>
            <text x="${x + 76}" y="118" text-anchor="middle" font-size="11" fill="${col}">${t.costs[i]}</text>
            <text x="${x + 76}" y="136" text-anchor="middle" font-size="11" fill="${col}">${t.costs2[i]}</text>`;
        }).join('')}
      </svg>`,
    'price-trust': (t) => `
      <svg viewBox="0 0 520 190" class="dg">
        <line x1="60" y1="160" x2="480" y2="160" stroke="#E5DED4"/>
        <line x1="60" y1="20" x2="60" y2="160" stroke="#E5DED4"/>
        <path d="M60 40 C 180 44, 300 120, 480 152" stroke="#A34D53" stroke-width="2" fill="none"/>
        <path d="M60 152 C 180 148, 300 70, 480 34" stroke="#47725D" stroke-width="2" fill="none"/>
        <text x="270" y="182" text-anchor="middle" font-size="11" fill="#94897D">${t.x}</text>
        <text x="26" y="94" text-anchor="middle" font-size="11" fill="#94897D" transform="rotate(-90 26 94)">${t.y}</text>
        <text x="470" y="150" text-anchor="end" font-size="11" fill="#A34D53">${t.falls}</text>
        <text x="470" y="28" text-anchor="end" font-size="11" fill="#47725D">${t.rises}</text>
      </svg>`,
    'follow-up': (t) => `
      <svg viewBox="0 0 520 150" class="dg">
        <line x1="40" y1="82" x2="480" y2="82" stroke="#E5DED4" stroke-width="2"/>
        ${t.points.map((p, i) => {
          const x = 52 + i * 106;
          return `<circle cx="${x}" cy="82" r="7" fill="${i === t.points.length - 1 ? '#241E19' : '#A07E3C'}"/>
            <text x="${x}" y="60" text-anchor="middle" font-size="11" font-family="Marcellus" fill="#241E19">${p.when}</text>
            <text x="${x}" y="108" text-anchor="middle" font-size="10" fill="#5C544C">${p.what}</text>`;
        }).join('')}
        <text x="480" y="128" text-anchor="end" font-size="10" letter-spacing="1" fill="#94897D">${t.stop}</text>
      </svg>`,
    'seven-signals': (t) => `
      <svg viewBox="0 0 520 130" class="dg">
        ${['hand','mirror','phone','short','laugh','correct','pause'].map((k, i) => {
          const x = 26 + i * 70;
          return `<rect x="${x}" y="24" width="58" height="76" rx="12" fill="#fff" stroke="#E5DED4"/>
            <g transform="translate(${x + 14},34)">${glyph(k, false).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>
            <text x="${x + 29}" y="88" text-anchor="middle" font-size="9" fill="#94897D">${t.names[i]}</text>`;
        }).join('')}
      </svg>`
  };

  function diagram(key, lang) {
    const L = lang === 'es' ? 'es' : 'en';
    const copy = {
      'two-mirrors': {
        en: { leftHead: 'THE BOOK — 6 STEPS', rightHead: 'ARCHITECTURE — 8 PHASES',
              steps: ['Make Safe', 'Inquire', 'Reflect', 'Recommend', 'Overcome', 'Resolve & Rise'],
              phases: ['Preparation', 'Connection', 'Discovery', 'Understanding', 'Education', 'Recommendation', 'Decision Support', 'Relationship Continuation'],
              foot: 'Six does not divide into eight. Read the joins, not the rows.' },
        es: { leftHead: 'EL LIBRO — 6 PASOS', rightHead: 'ARQUITECTURA — 8 FASES',
              steps: ['Hacer Sentir Segura', 'Indagar', 'Reflejar', 'Recomendar', 'Superar', 'Resolver y Elevar'],
              phases: ['Preparación', 'Conexión', 'Descubrimiento', 'Comprensión', 'Educación', 'Recomendación', 'Acompañamiento', 'Continuidad'],
              foot: 'Seis no se divide en ocho. Lee las uniones, no las filas.' }
      },
      'two-consultations': {
        en: { a: 'CONSULTATION ONE', b: 'CONSULTATION TWO', a1: 'You assess a face,', a2: 'a condition, a history.', b1: 'She assesses whether', b2: 'it is safe to tell you', b3: 'This is the one that decides.' },
        es: { a: 'CONSULTA UNO', b: 'CONSULTA DOS', a1: 'Tú evalúas un rostro,', a2: 'una condición, un historial.', b1: 'Ella evalúa si es seguro', b2: 'contarte la verdad', b3: 'Esta es la que decide.' }
      },
      'three-entrances': {
        en: { names: ['Quiet', 'Confident', 'Stormy'], signs: ['Short answers, closed posture', 'Names the treatment and dose', 'Arrives with a complaint'], needs: ['Permission before questions', 'Respect before redirection', 'The story told in full'] },
        es: { names: ['Silenciosa', 'Segura', 'Tormentosa'], signs: ['Respuestas cortas, postura cerrada', 'Nombra el tratamiento y la dosis', 'Llega con una queja'], needs: ['Permiso antes de preguntar', 'Respeto antes de redirigir', 'El relato contado entero'] }
      },
      'three-layers': {
        en: { l1: 'SURFACE', d1: 'What she asks for', l2: 'EMOTIONAL', d2: 'Why it matters now', l3: 'IDENTITY', d3: 'What she is protecting', axis: 'depth' },
        es: { l1: 'SUPERFICIE', d1: 'Lo que pide', l2: 'EMOCIONAL', d2: 'Por qué importa ahora', l3: 'IDENTIDAD', d3: 'Lo que protege', axis: 'profundidad' }
      },
      'five-drives': {
        en: { centre: 'DRIVE', names: ['Recognition', 'Control', 'Belonging', 'Renewal', 'Relief'] },
        es: { centre: 'MOTOR', names: ['Reconocimiento', 'Control', 'Pertenencia', 'Renovación', 'Alivio'] }
      },
      'discovery-funnel': {
        en: { s1: 'What she planned to say — accurate, incomplete, safe', s2: 'What she says when the room stays open', s3: 'What she came in carrying' },
        es: { s1: 'Lo que planeó decir: exacto, incompleto, seguro', s2: 'Lo que dice cuando la sala sigue abierta', s3: 'Aquello con lo que entró' }
      },
      'safety-scan': {
        en: { centre1: 'FIRST 30', centre2: 'SECONDS', time: 'before your first professional word',
              checks: ['Am I going to be judged for wanting this?', 'Am I about to be sold to?', 'Is this going to waste my morning?', 'Will I look foolish if I say what I want?'] },
        es: { centre1: 'PRIMEROS 30', centre2: 'SEGUNDOS', time: 'antes de tu primera palabra profesional',
              checks: ['¿Se me va a juzgar por querer esto?', '¿Me van a vender algo?', '¿Esto me hará perder la mañana?', '¿Pareceré ridícula si digo lo que quiero?'] }
      },
      'double-diagnosis': {
        en: { first: 'FIRST — EMOTIONAL', second: 'SECOND — AESTHETIC', a1: 'What it means to her',
              a2: 'What she is protecting', a3: 'What she would call success',
              b1: 'What the tissue needs', b2: 'What is realistic', b3: 'What the evidence supports',
              note: 'Reverse the order and she sees a problem, not a path.' },
        es: { first: 'PRIMERO — EMOCIONAL', second: 'SEGUNDO — ESTÉTICO', a1: 'Qué significa para ella',
              a2: 'Qué está protegiendo', a3: 'Qué llamaría ella éxito',
              b1: 'Qué necesita el tejido', b2: 'Qué es realista', b3: 'Qué respalda la evidencia',
              note: 'Invierte el orden y verá un problema, no un camino.' }
      },
      'three-closes': {
        en: { names: ['Pressure', 'Passive', 'Partnership'],
              says: ['"Only this week."', '"Call me if you decide."', '"What feels right to you?"'],
              costs: ['She buys,', 'She leaves,', 'She decides,'], costs2: ['then cancels.', 'and does not return.', 'and it holds.'] },
        es: { names: ['Presión', 'Pasivo', 'Colaboración'],
              says: ['«Solo esta semana».', '«Llámame si decides».', '«¿Qué te parece a ti?»'],
              costs: ['Compra', 'Se va', 'Decide'], costs2: ['y luego cancela.', 'y no vuelve.', 'y se sostiene.'] }
      },
      'price-trust': {
        en: { x: 'trust established', y: 'weight of price', falls: 'price obsession', rises: 'value understood' },
        es: { x: 'confianza establecida', y: 'peso del precio', falls: 'obsesión por el precio', rises: 'valor comprendido' }
      },
      'follow-up': {
        en: { stop: 'AND THEN IT STOPS',
              points: [{ when: 'Day 3', what: 'onset check' }, { when: 'Week 2', what: 'review in her words' }, { when: 'Month 1', what: 'adjust or continue' }, { when: 'Month 3', what: 'the stopping conversation' }] },
        es: { stop: 'Y AHÍ TERMINA',
              points: [{ when: 'Día 3', what: 'inicio del efecto' }, { when: 'Semana 2', what: 'revisión con sus palabras' }, { when: 'Mes 1', what: 'ajustar o continuar' }, { when: 'Mes 3', what: 'la conversación de parada' }] }
      },
      'seven-signals': {
        en: { names: ['Hand', 'Mirror', 'Photo', 'Shortened', 'Laugh', 'Correction', 'Pause'] },
        es: { names: ['Mano', 'Espejo', 'Foto', 'Acortada', 'Risa', 'Corrección', 'Pausa'] }
      }
    }[key];
    if (!copy || !DIAGRAMS[key]) return '';
    return `<div class="dgwrap" style="margin:6px 0 18px;overflow-x:auto">${DIAGRAMS[key](copy[L])}</div>`;
  }


  /* ---------- consultation map: trust across the eight phases ------------- */
  function trustCurve(points, lang) {
    // points: [{ phase, n, willingness, trustSum, aligned }]
    if (!points || !points.length) return '';
    const W = 520, H = 168, L = 34, R = 12, TOP = 18, BOT = 34;
    const step = (W - L - R) / Math.max(points.length - 1, 1);
    const y = v => TOP + (1 - Math.max(0, Math.min(100, v)) / 100) * (H - TOP - BOT);
    const path = points.map((p, i) => `${i ? 'L' : 'M'}${(L + i * step).toFixed(1)} ${y(p.willingness).toFixed(1)}`).join(' ');
    const area = `${path} L${(L + (points.length - 1) * step).toFixed(1)} ${H - BOT} L${L} ${H - BOT} Z`;
    return `<div class="dgwrap" style="overflow-x:auto"><svg viewBox="0 0 ${W} ${H}" class="dg">
      <defs><linearGradient id="tcg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#C9A45C" stop-opacity=".28"/><stop offset="1" stop-color="#C9A45C" stop-opacity="0"/>
      </linearGradient></defs>
      <line x1="${L}" y1="${H - BOT}" x2="${W - R}" y2="${H - BOT}" stroke="#E5DED4"/>
      <line x1="${L}" y1="${y(70)}" x2="${W - R}" y2="${y(70)}" stroke="#E5D9BC" stroke-dasharray="3 4"/>
      <text x="${L - 6}" y="${y(70) + 4}" text-anchor="end" font-size="9" fill="#94897D">70</text>
      <path class="tcarea" d="${area}" fill="url(#tcg)"/>
      <path class="tcline" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" d="${path}" stroke="#A07E3C" stroke-width="2" fill="none"/>
      ${points.map((p, i) => {
        const cx = L + i * step, cy = y(p.willingness);
        const col = p.aligned === true ? '#47725D' : p.aligned === false ? '#A34D53' : '#A07E3C';
        const last = i === points.length - 1;
        return `${last ? `<circle class="tcnow" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="8.5" fill="none" stroke="${col}" stroke-opacity=".45"/>` : ''}
          <circle class="tcpt" style="--i:${i}" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="5" fill="${col}" stroke="#fff" stroke-width="1.5"/>
          <text x="${cx.toFixed(1)}" y="${H - BOT + 14}" text-anchor="middle" font-size="9" fill="#94897D">${p.n}</text>
          <text x="${cx.toFixed(1)}" y="${H - BOT + 25}" text-anchor="middle" font-size="8.5" fill="#B6ABA0">${esc(p.short || '')}</text>`;
      }).join('')}
      <text x="${L}" y="12" font-size="9" letter-spacing="1.5" fill="#94897D">${lang === 'es' ? 'DISPOSICIÓN A AVANZAR' : 'WILLINGNESS TO PROCEED'}</text>
    </svg></div>`;
  }

  /* ==========================================================================
     TRUST MOVEMENT — the seven canonical stages, and which one just moved.
     Every stage is drawn on the same -3..+3 rail, so the row that fell is
     found by the eye before the number is read. The hollow ring marks where
     the stage stood before the last decision; the chip says how far it went.
     ========================================================================== */
  function trustLadder(rows, prevTrust, labels) {
    const L = labels || {};
    const cells = 7, cw = 9, gap = 3.5, W = cells * (cw + gap) - gap;
    const mid = v => (v + 3) * (cw + gap) + cw / 2;
    let anyMove = false;
    const body = (rows || []).map(r => {
      const v = Number(r.value) || 0;
      const p = prevTrust && typeof prevTrust[r.key] === 'number' ? prevTrust[r.key] : null;
      const d = p === null ? 0 : v - p;
      const dir = d > 0 ? 'up' : d < 0 ? 'down' : 'flat';
      if (d !== 0) anyMove = true;
      let scale = '';
      for (let i = 0; i < cells; i++) {
        const val = i - 3;
        const on = val === 0 ? false : (val > 0 ? v >= val : v <= val);
        const was = (p === null || val === 0) ? false : (val > 0 ? p >= val : p <= val);
        // a cell that changed hands is the movement itself: it is staggered
        // outward from where she stood, so the eye follows the travel rather
        // than re-reading a total it never saw change.
        const turned = d !== 0 && on !== was;
        const fill = val === 0 ? '#CFC6BA' : on ? (val > 0 ? '#47725D' : '#A34D53') : '#EFEAE2';
        scale += `<rect${turned ? ` class="tlc ${on ? 'gain' : 'loss'}" style="--i:${Math.abs(val - p)};--was:${val > 0 ? '#47725D' : '#A34D53'}"` : ''} x="${(i * (cw + gap)).toFixed(1)}" y="3.5" width="${cw}" height="8" rx="2.6" fill="${fill}"/>`;
      }
      if (p !== null && d !== 0) {
        // where she stood before, and the distance she has just travelled
        const x0 = mid(p), x1 = mid(v), s = x1 > x0 ? 1 : -1;
        scale += `<circle cx="${x0.toFixed(1)}" cy="7.5" r="3.1" fill="none" stroke="#241E19" stroke-opacity=".4" stroke-width="1.2"/>
          <path class="tlmv" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" d="M${x0.toFixed(1)} 16.8H${x1.toFixed(1)}" fill="none" stroke-width="1.5" stroke-linecap="round"/>
          <path class="tlhead" d="M${(x1 - s * 3.1).toFixed(1)} 14.7L${x1.toFixed(1)} 16.8L${(x1 - s * 3.1).toFixed(1)} 18.9Z"/>`;
      }
      return `<div class="tlrow ${dir}" data-stage="${esc(r.key)}"${r.question ? ` title="${esc(r.question)}"` : ''}>
        <span class="tln">${esc(String(r.stage))}</span>
        <span class="tlname">${esc(r.name)}</span>
        <svg class="tlsc" viewBox="0 0 ${W} 21" aria-hidden="true">${scale}</svg>
        <span class="tlv">${v > 0 ? '+' : ''}${v}</span>
        <span class="tld ${dir}">${d === 0 ? '' : (d > 0 ? '+' : '') + d}</span>
      </div>`;
    }).join('');
    return `<div class="tladder${anyMove ? ' moved' : ''}">${body}${L.legend ? `<p class="tlnote">${esc(L.legend)}</p>` : ''}</div>`;
  }

  /* ==========================================================================
     BEFORE / AFTER — what one decision did to her.
     Her state on the left as it was, her state on the right as it is, the
     willingness rail moving between the two, and the specific items that
     changed. The 70 mark on the rail is the threshold the outcome is derived
     against, so a fall is read against something real.
     ========================================================================== */
  function consequenceDelta(d) {
    const L = d.labels || {};
    const b = d.before || {}, a = d.after || {};
    const wd = (a.willingness || 0) - (b.willingness || 0);
    const chip = wd === 0 ? '' : `<span class="delta ${wd > 0 ? 'up' : 'down'}">${wd > 0 ? '+' : ''}${wd}</span>`;
    const rows = (d.changes || []).map(c =>
      `<li class="cqp-ch ${c.tone || 'flat'}"><span class="cqp-ck">${esc(c.k)}</span>
        <span class="cqp-cv">${esc(c.v)}</span></li>`).join('');
    return `<section class="card cqp ${wd < 0 ? 'fell' : wd > 0 ? 'rose' : 'held'}">
      <div class="cqp-pair">
        <div class="cqp-side was">
          <div class="cqp-k">${esc(L.before || '')}</div>
          <div class="cqp-w">${b.willingness}<small>/100</small></div>
          <div class="cqp-p">${esc(b.posture || '')}</div>
        </div>
        <svg class="cqp-arrow" viewBox="0 0 34 18" aria-hidden="true">
          <path class="cqp-shaft" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" d="M2 9h27" stroke="#C9A45C" stroke-width="1.4" fill="none"/>
          <path class="cqp-tip" d="M25 4l7 5-7 5" fill="none" stroke="#C9A45C" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="cqp-side now">
          <div class="cqp-k">${esc(L.after || '')}</div>
          <div class="cqp-w">${a.willingness}<small>/100</small> ${chip}</div>
          <div class="cqp-p">${esc(a.posture || '')}</div>
        </div>
      </div>
      <div class="cqp-track ${wd < 0 ? 'fell' : wd > 0 ? 'rose' : ''}"
           style="--from:${Math.max(0, Math.min(100, b.willingness))}%;--to:${Math.max(0, Math.min(100, a.willingness))}%">
        <i class="cqp-fill"></i>
        <span class="cqp-ghost" style="left:${Math.max(0, Math.min(100, b.willingness))}%"></span>
        <span class="cqp-thr" style="left:70%"><b>70</b></span>
      </div>
      <div class="cqp-thrnote">${esc(L.threshold || '')}</div>
      ${rows ? `<ul class="cqp-list">${rows}</ul>` : ''}
    </section>`;
  }

  /* ==========================================================================
     THE CONSULTATION MAP — eight phases, the choice made at each, and where
     trust moved. Readable at a glance on a phone, and the one picture worth
     keeping after the consultation.
     ========================================================================== */
  function consultMap(rows, labels) {
    const L = labels || {};
    return `<div class="cmap">` + (rows || []).map(r => `
      <div class="cmrow ${r.state || 'ahead'}">
        <div class="cmn"><span>${r.n}</span></div>
        <div class="cmb">
          <div class="cmph">${esc(r.name)}</div>
          ${r.choice
            ? `<div class="cmch">${esc(r.choice)}</div>`
            : `<div class="cmch none">${esc(r.state === 'now' ? (L.here || '') : (L.notReached || ''))}</div>`}
          ${(r.moved || []).length ? `<div class="cmmv">${r.moved.map(m =>
            `<span class="cmchip ${m.d > 0 ? 'up' : 'down'}">${esc(m.name)} ${m.d > 0 ? '+' : ''}${m.d}</span>`).join('')}</div>` : ''}
        </div>
        <div class="cmw">${r.willingness == null ? '' :
          `<b>${r.willingness}</b><span>${esc(L.willShort || '')}</span>${r.wd
            ? `<span class="delta ${r.wd > 0 ? 'up' : 'down'}">${r.wd > 0 ? '+' : ''}${r.wd}</span>` : ''}`}</div>
      </div>`).join('') + `</div>`;
  }

  /* ---------- opening client state, on a library card --------------------- */
  function openingMeter(w, labels) {
    const L = labels || {};
    const v = Math.max(0, Math.min(100, Number(w) || 0));
    return `<div class="omet">
      <div class="ometbar" style="--to:${v}%"><i style="width:${v}%"></i><span class="ometthr" style="left:70%"></span></div>
      <div class="ometlab"><b>${v}</b><span>${esc(L.of100 || '')}</span>
        <span class="ometsp"></span><span class="omethr">${esc(L.threshold || '')}</span></div>
    </div>`;
  }

  /* ---------- where every decision path in a case actually ends ----------- */
  function outcomeSplit(counts, labels) {
    const L = labels || {};
    const total = Math.max(1, counts.total || 0);
    const seg = (k, n, cls) => {
      const pct = n / total * 100;
      return pct < 0.01 ? '' : `<i class="${cls}" style="width:${pct.toFixed(2)}%" title="${esc(k)}"></i>`;
    };
    return `<div class="osplit">
      <div class="osbar">${seg(L.yes, counts.YES, 'y')}${seg(L.defer, counts.DEFER, 'd')}${seg(L.no, counts.NO, 'n')}</div>
      <div class="oskey">
        <span class="osk y"><b>${counts.YES}</b>${esc(L.yes || '')}</span>
        <span class="osk d"><b>${counts.DEFER}</b>${esc(L.defer || '')}</span>
        <span class="osk n"><b>${counts.NO}</b>${esc(L.no || '')}</span>
      </div>
      ${L.foot ? `<div class="osfoot">${esc(L.foot)}</div>` : ''}
    </div>`;
  }

  /* ---------- manager pattern graphic ------------------------------------ */
  function patternBars(rows, lang) {
    if (!rows || !rows.length) return '';
    const max = Math.max(...rows.map(r => r.value), 1);
    return `<div class="pbars">` + rows.map(r => `
      <div class="pbar">
        <div class="pbl"><span>${esc(r.label)}</span><b>${r.value}</b></div>
        <div class="pbt"><i style="width:${Math.round(r.value / max * 100)}%;background:${r.tone === 'bad' ? '#A34D53' : r.tone === 'good' ? '#47725D' : 'var(--mercury)'}"></i></div>
        ${r.note ? `<div class="pbn">${esc(r.note)}</div>` : ''}
      </div>`).join('') + `</div>`;
  }

  /* ---------- toolkit preview -------------------------------------------- */
  function toolkitPreview(n, count) {
    const rows = Math.max(3, Math.min(count || 6, 8));
    return `<svg width="72" height="56" viewBox="0 0 72 56" aria-hidden="true">
      <rect x="1" y="1" width="70" height="54" rx="7" fill="#FBF7EF" stroke="#E5DED4"/>
      <text x="8" y="15" font-size="10" font-weight="700" fill="#A07E3C">#${n}</text>
      ${Array.from({ length: rows }).map((_, i) =>
        `<rect x="8" y="${20 + i * 4.4}" width="${i % 3 === 0 ? 40 : 56}" height="2.2" rx="1.1" fill="#E5DED4"/>`).join('')}
    </svg>`;
  }

  /* ---------- the five engines, drawn -------------------------------------
     Each engine is shown by what it owns: the eight canonical phases as eight
     bars, with the ones this engine governs lit. The engines organize the
     journey; they never replace the phases, and the picture says so. */
  function engineOwnership(owns) {
    const all = owns === 'all';
    const set = all ? [1, 2, 3, 4, 5, 6, 7, 8] : (owns || []);
    return `<svg viewBox="0 0 196 30" class="eown" aria-hidden="true">
      ${[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => {
        const x = i * 24.6, on = set.indexOf(n) >= 0;
        return `<rect x="${x.toFixed(1)}" y="2" width="21" height="8" rx="4"
            fill="${on ? (all ? '#C9A45C' : '#A07E3C') : '#E5DED4'}" ${all && on ? 'fill-opacity=".55"' : ''}/>
          <text x="${(x + 10.5).toFixed(1)}" y="25" text-anchor="middle" font-size="9"
            fill="${on ? '#5C544C' : '#B6ABA0'}">${n}</text>`;
      }).join('')}
    </svg>`;
  }

  /** engines: [{ key, name, role, purpose, ownsPhases }] */
  function engineStrip(engines) {
    return `<div class="engines">` + (engines || []).map(e => `
      <article class="engine">
        <div class="enm">${esc(e.name)}</div>
        ${engineOwnership(e.ownsPhases)}
        <div class="eph">${esc(e.role)}</div>
        <div class="epu">${esc(e.purpose)}</div>
      </article>`).join('') + `</div>`;
  }

  /* ---------- the eight canonical phases, drawn as one spine -------------
     phases: [{ n, name }]; current: 1..8 or null. */
  function wrap(text, max) {
    const words = String(text || '').split(/\s+/);
    const lines = []; let line = '';
    for (const w of words) {
      if (!line) { line = w; continue; }
      if ((line + ' ' + w).length <= max) line += ' ' + w;
      else { lines.push(line); line = w; }
    }
    if (line) lines.push(line);
    return lines.slice(0, 2);
  }
  /** The same spine stood on end, for a phone: eight rows, nothing clipped. */
  function phaseSpineTall(list, current, hereLabel) {
    const H = 26 + list.length * 44;
    return `<svg viewBox="0 0 320 ${H}" class="spine-tall">
      <line x1="26" y1="20" x2="26" y2="${H - 26}" stroke="#E5DED4" stroke-width="2"/>
      ${current > 1 ? `<line x1="26" y1="20" x2="26" y2="${20 + (Math.min(current, list.length) - 1) * 44}" stroke="#A07E3C" stroke-width="2"/>` : ''}
      ${list.map((p, i) => {
        const y = 20 + i * 44;
        const done = current && p.n < current, now = current && p.n === current;
        const fill = now ? '#241E19' : done ? '#A07E3C' : '#FFFFFF';
        const stroke = now ? '#241E19' : done ? '#A07E3C' : '#E5DED4';
        const tx = now ? '#EFEAE3' : done ? '#FFFFFF' : '#94897D';
        return `${now ? `<circle cx="26" cy="${y}" r="16" fill="none" stroke="#C9A45C" stroke-opacity=".7"/>` : ''}
          <circle cx="26" cy="${y}" r="11.5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
          <text x="26" y="${y + 4}" text-anchor="middle" font-size="11" font-family="Marcellus" fill="${tx}">${p.n}</text>
          <text x="50" y="${y + 4}" font-size="12.5" fill="${now ? '#241E19' : '#5C544C'}"
            font-weight="${now ? '700' : '400'}">${esc(p.name)}</text>
          ${now && hereLabel ? `<text x="316" y="${y + 4}" text-anchor="end" font-size="8.5" letter-spacing="1.3"
            fill="#A07E3C" font-weight="700">${esc(String(hereLabel).toUpperCase())}</text>` : ''}`;
      }).join('')}
    </svg>`;
  }
  function phaseSpine(phases, current, hereLabel) {
    const list = (phases || []).slice(0, 8);
    if (!list.length) return '';
    const W = 760, H = 128, L = 46, step = (W - L * 2) / (list.length - 1);
    const y = 62;
    return `<div class="dgwrap spinewrap">
      <svg viewBox="0 0 ${W} ${H}" class="dg spine spine-wide">
      <line x1="${L}" y1="${y}" x2="${W - L}" y2="${y}" stroke="#E5DED4" stroke-width="2"/>
      ${current > 1 ? `<line x1="${L}" y1="${y}" x2="${(L + (Math.min(current, list.length) - 1) * step).toFixed(1)}" y2="${y}" stroke="#A07E3C" stroke-width="2"/>` : ''}
      ${list.map((p, i) => {
        const x = L + i * step;
        const done = current && p.n < current, now = current && p.n === current;
        const fill = now ? '#241E19' : done ? '#A07E3C' : '#FFFFFF';
        const stroke = now ? '#241E19' : done ? '#A07E3C' : '#E5DED4';
        const tx = now ? '#EFEAE3' : done ? '#FFFFFF' : '#94897D';
        const lines = wrap(p.name, 13);
        return `${now ? `<circle cx="${x.toFixed(1)}" cy="${y}" r="17" fill="none" stroke="#C9A45C" stroke-opacity=".7"/>` : ''}
          <circle cx="${x.toFixed(1)}" cy="${y}" r="12" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
          <text x="${x.toFixed(1)}" y="${y + 4}" text-anchor="middle" font-size="11" font-family="Marcellus" fill="${tx}">${p.n}</text>
          ${lines.map((ln, k) => `<text x="${x.toFixed(1)}" y="${y + 30 + k * 12}" text-anchor="middle" font-size="10"
             fill="${now ? '#241E19' : '#5C544C'}" font-weight="${now ? '700' : '400'}">${esc(ln)}</text>`).join('')}
          ${now && hereLabel ? `<text x="${x.toFixed(1)}" y="${y - 26}" text-anchor="middle" font-size="9"
             letter-spacing="1.6" fill="#A07E3C" font-weight="700">${esc(String(hereLabel).toUpperCase())}</text>` : ''}`;
      }).join('')}
    </svg>${phaseSpineTall(list, current, hereLabel)}</div>`;
  }

  /* ---------- compact phase progress, for a case card --------------------- */
  function phaseDots(current) {
    return `<svg viewBox="0 0 200 14" class="pdots" aria-hidden="true">
      ${[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => {
        const x = i * 25;
        const fill = current && n < current ? '#A07E3C' : current && n === current ? '#241E19' : '#E5DED4';
        return `<rect x="${x}" y="4" width="21" height="6" rx="3" fill="${fill}"/>`;
      }).join('')}
    </svg>`;
  }

  /* ---------- phase ribbon ----------------------------------------------- */
  function phaseRibbon(current) {
    return `<svg viewBox="0 0 320 12" preserveAspectRatio="none" style="width:100%;height:12px;display:block">
      ${[1,2,3,4,5,6,7,8].map((n, i) => {
        const x = i * 40;
        const fill = n < current ? '#A07E3C' : n === current ? '#241E19' : '#E5DED4';
        return `<rect x="${x + 1}" y="3" width="38" height="6" rx="3" fill="${fill}"/>`;
      }).join('')}
    </svg>`;
  }

  /* ==========================================================================
     THE CURRICULUM MAP
     Ten modules are not ten cards. They are one progression, and every one of
     them is attached to a canonical phase of the consultation — sometimes the
     same phase twice, sometimes out of order. The picture says both things at
     once: the ascent along the top is the order the learner walks, the rail
     along the bottom is the order the consultation runs, and the thin lines
     between them are what each module is for. The crossings are the teaching:
     Module 1 is about the room you have not entered yet, Module 2 is about
     Phase 1, so the first two lines already cross.

       steps:  [{ n, stage, title, phaseN, state:'done'|'next'|'open', done, total }]
       phases: [{ n, name }]
     ========================================================================== */
  function curriculumMap(steps, phases, labels) {
    const L = labels || {};
    const list = (steps || []).slice(0, 10);
    if (!list.length) return '';
    const P = (phases || []).slice(0, 8);
    const W = 980, H = 322, LX = 56, RX = 38;
    const mstep = (W - LX - RX) / Math.max(list.length - 1, 1);
    const mx = i => LX + i * mstep;
    const my = i => 128 - i * 5.4;
    const pstep = (W - LX - RX) / Math.max(P.length - 1, 1);
    const px = n => LX + (Math.max(1, Math.min(8, n)) - 1) * pstep;
    const prail = 246;

    const tone = s => s === 'done' ? '#A07E3C' : s === 'next' ? '#241E19' : '#FFFFFF';
    const edge = s => s === 'done' ? '#A07E3C' : s === 'next' ? '#241E19' : '#E5DED4';
    const ink = s => s === 'done' ? '#FFFFFF' : s === 'next' ? '#EFEAE3' : '#94897D';

    // the ascent, drawn twice: the whole road, then the part already walked
    const road = list.map((s, i) => `${i ? 'L' : 'M'}${mx(i).toFixed(1)} ${my(i).toFixed(1)}`).join(' ');
    let walked = '';
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i].state === 'done' && list[i + 1].state === 'done') {
        walked += `<path d="M${mx(i).toFixed(1)} ${my(i).toFixed(1)}L${mx(i + 1).toFixed(1)} ${my(i + 1).toFixed(1)}" stroke="#A07E3C" stroke-width="2.5" fill="none"/>`;
      }
    }

    const links = list.map((s, i) => {
      const on = s.state === 'done' || s.state === 'next';
      return `<path d="M${mx(i).toFixed(1)} ${(my(i) + 15).toFixed(1)}C${mx(i).toFixed(1)} ${my(i) + 70},${px(s.phaseN).toFixed(1)} ${prail - 62},${px(s.phaseN).toFixed(1)} ${prail - 11}"
        stroke="${on ? '#C9A45C' : '#E5DED4'}" stroke-opacity="${on ? '.85' : '.9'}" stroke-width="${s.state === 'next' ? 2 : 1.2}" fill="none"/>`;
    }).join('');

    const nodes = list.map((s, i) => {
      const x = mx(i), y = my(i);
      const lines = wrap(s.stage, 12);
      return `${s.state === 'next' ? `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="18" fill="none" stroke="#C9A45C" stroke-opacity=".75"/>` : ''}
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="13" fill="${tone(s.state)}" stroke="${edge(s.state)}" stroke-width="2"/>
        <text x="${x.toFixed(1)}" y="${(y + 4.5).toFixed(1)}" text-anchor="middle" font-size="11.5" font-family="Marcellus" fill="${ink(s.state)}">${s.n}</text>
        ${lines.map((ln, k) => `<text x="${x.toFixed(1)}" y="${(y - 30 + k * 12).toFixed(1)}" text-anchor="middle" font-size="10.5"
          fill="${s.state === 'open' ? '#94897D' : '#241E19'}" font-weight="${s.state === 'next' ? '700' : '400'}">${esc(ln)}</text>`).join('')}
        <text x="${(x + 17).toFixed(1)}" y="${(y + 4.5).toFixed(1)}" font-size="9" fill="${s.state === 'done' ? '#A07E3C' : '#B6ABA0'}">${s.done}/${s.total}</text>
        ${s.state === 'next' && L.here ? `<text x="${x.toFixed(1)}" y="${(y - 46).toFixed(1)}" text-anchor="middle" font-size="8.5"
          letter-spacing="1.6" fill="#A07E3C" font-weight="700">${esc(String(L.here).toUpperCase())}</text>` : ''}`;
    }).join('');

    const rail = `<line x1="${LX}" y1="${prail}" x2="${W - RX}" y2="${prail}" stroke="#241E19" stroke-width="2"/>
      ${P.map(p => {
        const x = px(p.n), taught = list.some(s => s.phaseN === p.n && s.state !== 'open');
        const lines = wrap(p.name, 13);
        return `<circle cx="${x.toFixed(1)}" cy="${prail}" r="6" fill="${taught ? '#241E19' : '#FFFFFF'}" stroke="#241E19" stroke-width="1.6"/>
          <text x="${x.toFixed(1)}" y="${prail + 22}" text-anchor="middle" font-size="9.5" font-family="Marcellus" fill="#5C544C">${p.n}</text>
          ${lines.map((ln, k) => `<text x="${x.toFixed(1)}" y="${prail + 35 + k * 11}" text-anchor="middle" font-size="9" fill="#94897D">${esc(ln)}</text>`).join('')}`;
      }).join('')}`;

    return `<div class="dgwrap cmapwrap">
      <svg viewBox="0 0 ${W} ${H}" class="dg cmapart cmap-wide">
        <text x="${LX}" y="26" font-size="9" letter-spacing="1.6" fill="#A07E3C" font-weight="700">${esc(String(L.ascent || '').toUpperCase())}</text>
        <text x="${LX}" y="${prail + 56}" font-size="9" letter-spacing="1.6" fill="#94897D" font-weight="700">${esc(String(L.rail || '').toUpperCase())}</text>
        ${links}
        <path d="${road}" stroke="#E5DED4" stroke-width="2.5" fill="none"/>
        ${walked}
        ${nodes}
        ${rail}
      </svg>
      ${curriculumMapTall(list, P, L)}
    </div>`;
  }

  /** The same map stood on end for a phone: one row per module, the phase it
      teaches named on the row rather than drawn across the page. */
  function curriculumMapTall(list, P, L) {
    const rowH = 52, H = 30 + list.length * rowH;
    const nameOf = n => { const p = P.find(x => x.n === n); return p ? p.name : ''; };
    return `<svg viewBox="0 0 340 ${H}" class="cmap-tall">
      <line x1="24" y1="20" x2="24" y2="${H - 24}" stroke="#E5DED4" stroke-width="2"/>
      ${list.map((s, i) => {
        const y = 24 + i * rowH;
        const done = s.state === 'done', now = s.state === 'next';
        const fill = now ? '#241E19' : done ? '#A07E3C' : '#FFFFFF';
        const stroke = now ? '#241E19' : done ? '#A07E3C' : '#E5DED4';
        const tx = now ? '#EFEAE3' : done ? '#FFFFFF' : '#94897D';
        return `${i && list[i - 1].state === 'done' && done ? `<line x1="24" y1="${y - rowH}" x2="24" y2="${y}" stroke="#A07E3C" stroke-width="2"/>` : ''}
          ${now ? `<circle cx="24" cy="${y}" r="16" fill="none" stroke="#C9A45C" stroke-opacity=".75"/>` : ''}
          <circle cx="24" cy="${y}" r="11.5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
          <text x="24" y="${y + 4}" text-anchor="middle" font-size="11" font-family="Marcellus" fill="${tx}">${s.n}</text>
          <text x="48" y="${y - 2}" font-size="12.5" fill="${s.state === 'open' ? '#5C544C' : '#241E19'}" font-weight="${now ? '700' : '400'}">${esc(s.stage)}</text>
          <text x="48" y="${y + 13}" font-size="10" fill="#94897D">${esc((L.teaches || '') + ' ' + s.phaseN + ' · ' + nameOf(s.phaseN))}</text>
          <text x="332" y="${y + 3}" text-anchor="end" font-size="10" fill="${done ? '#A07E3C' : '#B6ABA0'}">${s.done}/${s.total}</text>`;
      }).join('')}
    </svg>`;
  }

  /* ==========================================================================
     FIRST-RUN SCENES
     Three small drawings for the walk-in, each carrying one idea the product
     is built on. They are drawn for the dark stage they sit on.
     ========================================================================== */
  function onboardScene(key, labels) {
    const L = labels || {};
    if (key === 'layers') {
      const bars = [
        { w: 252, o: '.92', t: L.a || '' },
        { w: 212, o: '.62', t: L.b || '' },
        { w: 172, o: '.34', t: L.c || '' }
      ];
      return `<svg viewBox="0 0 320 168" class="obart" aria-hidden="true">
        <path d="M16 26h226l14 15-14 15H16z" fill="none" stroke="#C9A45C" stroke-opacity=".55"/>
        <text x="28" y="46" font-size="11.5" fill="#EFEAE3" font-style="italic">${esc(L.said || '')}</text>
        ${bars.map((b, i) => `<rect x="16" y="${78 + i * 28}" width="${b.w}" height="16" rx="8" fill="#C9A45C" fill-opacity="${b.o}"/>
          <text x="27" y="${90 + i * 28}" font-size="9.5" fill="#241E19" font-weight="700">${esc(b.t)}</text>`).join('')}
        <path d="M300 74v70" stroke="#C9A45C" stroke-opacity=".5" stroke-dasharray="3 4"/>
        <path d="M296 138l4 8 4-8" fill="none" stroke="#C9A45C" stroke-opacity=".8"/>
        <text x="292" y="68" text-anchor="end" font-size="9" letter-spacing="1.2" fill="#A07E3C" font-weight="700">${esc(String(L.down || '').toUpperCase())}</text>
      </svg>`;
    }
    if (key === 'loop') {
      const box = (x, t) => `<rect x="${x}" y="42" width="84" height="50" rx="10" fill="rgba(239,234,227,.06)" stroke="#C9A45C" stroke-opacity=".5"/>
        ${wrap(t, 11).map((ln, k) => `<text x="${x + 42}" y="${66 + k * 13}" text-anchor="middle" font-size="10.5" fill="#EFEAE3">${esc(ln)}</text>`).join('')}`;
      const arrow = x => `<path d="M${x} 67h24" stroke="#C9A45C" stroke-width="1.3"/><path d="M${x + 19} 62l6 5-6 5" fill="none" stroke="#C9A45C" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`;
      return `<svg viewBox="0 0 320 168" class="obart" aria-hidden="true">
        ${box(8, L.a || '')}${arrow(94)}${box(118, L.b || '')}${arrow(204)}${box(228, L.c || '')}
        <path d="M270 96v26H50v-20" fill="none" stroke="#C9A45C" stroke-opacity=".45" stroke-dasharray="4 5"/>
        <path d="M45 107l5-7 5 7" fill="none" stroke="#C9A45C" stroke-opacity=".7"/>
        <text x="160" y="140" text-anchor="middle" font-size="10" fill="#BCB2A5">${esc(L.back || '')}</text>
      </svg>`;
    }
    // 'evidence' — many recorded choices, one coaching sentence
    const rows = [0, 1, 2, 3];
    return `<svg viewBox="0 0 320 168" class="obart" aria-hidden="true">
      ${rows.map(i => `<g>
        ${[0, 1, 2, 3, 4, 5].map(k => `<rect x="${14 + k * 15}" y="${20 + i * 22}" width="11" height="7" rx="3.5"
          fill="${(i + k) % 3 === 0 ? '#A34D53' : '#C9A45C'}" fill-opacity="${(i + k) % 3 === 0 ? '.9' : '.42'}"/>`).join('')}
        <path d="M110 ${23.5 + i * 22}C150 ${23.5 + i * 22},150 118,190 118" stroke="#C9A45C" stroke-opacity=".38" fill="none"/>
      </g>`).join('')}
      <rect x="190" y="106" width="116" height="24" rx="12" fill="#C9A45C" fill-opacity=".9"/>
      <text x="248" y="122" text-anchor="middle" font-size="10.5" font-weight="700" fill="#241E19">${esc(L.out || '')}</text>
      <text x="14" y="150" font-size="10" fill="#BCB2A5">${esc(L.note || '')}</text>
    </svg>`;
  }

  /* ---------- one decision's willingness move, small enough for a row ----- */
  function miniTrack(before, after, label) {
    const b = Math.max(0, Math.min(100, Number(before) || 0));
    const a = Math.max(0, Math.min(100, Number(after) || 0));
    const d = a - b;
    return `<div class="mtrk ${d < 0 ? 'fell' : d > 0 ? 'rose' : ''}">
      <span class="mtrkbar" style="--from:${b}%;--to:${a}%"><i style="width:${a}%"></i><em style="left:${b}%"></em><s style="left:70%"></s></span>
      <span class="mtrkv">${b} → ${a}${d ? ` <span class="delta ${d > 0 ? 'up' : 'down'}">${d > 0 ? '+' : ''}${d}</span>` : ''}</span>
      ${label ? `<span class="mtrkk">${esc(label)}</span>` : ''}
    </div>`;
  }

  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ==========================================================================
     LESSON MARKS
     Three small drawings the lesson player leans on: the opening quotation
     ornament for a passage from the book, the mark on a second attempt, and
     the band that sits behind a lesson cover.
     ========================================================================== */

  /** The pull-quote ornament. Drawn, not a typographic character. */
  function quoteMark(size) {
    const s = size || 44;
    return `<svg width="${s}" height="${(s * 0.72).toFixed(0)}" viewBox="0 0 50 36" class="qmark" aria-hidden="true">
      <path d="M4 32c0-13 5-22 15-28l3 5C15 13 12 18 12 23h9v13z" fill="#C9A45C" fill-opacity=".92"/>
      <path d="M29 32c0-13 5-22 15-28l3 5c-7 4-10 9-10 14h9v13z" fill="#C9A45C" fill-opacity=".55"/>
    </svg>`;
  }

  /** The mark on the retry: one turn back round, not an error cross. */
  function secondChance(size) {
    const s = size || 30;
    return `<svg width="${s}" height="${s}" viewBox="0 0 32 32" class="scmark" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#47725D" fill-opacity=".1"/>
      <path d="M23.5 12a9 9 0 10.9 6.3" fill="none" stroke="#47725D" stroke-width="2" stroke-linecap="round"/>
      <path d="M17.5 11.6h6.4V5.6" fill="none" stroke="#47725D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  /** The band behind a lesson cover: the module's own composition, widened. */
  function coverBand(n, accent) {
    return `<div class="cvband" aria-hidden="true">${cover(n, accent)}</div>`;
  }

  /* ---------- Clinic Scale System endorsement mark ------------------------ */
  function csLogo(size) {
    const s = size || 34;
    return `<svg width="${s}" height="${s}" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="#C9A45C" stroke-opacity=".55"/>
      <path d="M13 25V15l7 6 7-6v10" stroke="#C9A45C" stroke-width="2" stroke-linejoin="round"/>
    </svg>`;
  }

  /* ---------- the mark on a shelf that is still empty ----------------------
     One quiet line drawing per kind of thing that has not been recorded yet,
     in the same stroke language as `glyph` and at the same weight, so a blank
     screen belongs to the same product as a full one. Nothing here is a logo:
     the endorsement mark above is the only badge in the system. */
  function blankMark(kind, size) {
    const s = size || 30;
    const g = {
      // a ruled page with one line written on it
      journal: '<rect x="8" y="5" width="20" height="26" rx="2.5"/><path d="M13 12h10M13 17h10M13 22h5"/>',
      // two turns of a conversation that has not happened
      consult: '<path d="M5 9a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2h-7l-5 4v-4H7a2 2 0 01-2-2z"/><path d="M25 14h2a2 2 0 012 2v7a2 2 0 01-2 2h-1v4l-4-4h-5"/>',
      // a document still to be written, with its corner turned
      doc: '<path d="M9 4h11l7 7v19a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2z"/><path d="M20 4v7h7"/><path d="M12 19h11M12 24h7"/>',
      // an envelope standing open, waiting to be sent
      invite: '<rect x="4" y="9" width="24" height="17" rx="2.5"/><path d="M4 12l12 8 12-8"/>',
      // an open book, for the passages worked through
      book: '<path d="M16 9c-3-2.5-6.5-3-11-3v19c4.5 0 8 .5 11 3 3-2.5 6.5-3 11-3V6c-4.5 0-8 .5-11 3z"/><path d="M16 9v19"/>',
      // a clipboard, for an assignment that is not open yet
      assignment: '<rect x="7" y="6" width="18" height="24" rx="2.5"/><path d="M12 6V4.5A1.5 1.5 0 0113.5 3h5A1.5 1.5 0 0120 4.5V6"/><path d="M12 15h8M12 21h5"/>',
      // a ring of development that has not started turning
      growth: '<circle cx="16" cy="16" r="11" stroke-dasharray="3 4"/><path d="M16 21v-9l-3.5 3.5M16 12l3.5 3.5"/>'
    }[kind] || '<circle cx="16" cy="16" r="10" stroke-dasharray="3 4"/>';
    return `<svg width="${s}" height="${s}" viewBox="0 0 32 32" fill="none" stroke="#A07E3C"
      stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${g}</svg>`;
  }

  return { cover, coverBand, avatar, ring, glyph, diagram, csLogo, quoteMark, secondChance,
           trustCurve, patternBars, toolkitPreview,
           phaseRibbon, phaseSpine, phaseDots, engineStrip, engineOwnership,
           trustLadder, consequenceDelta, consultMap, openingMeter, outcomeSplit,
           curriculumMap, onboardScene, miniTrack, blankMark };
})();
