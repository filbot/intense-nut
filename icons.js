/* Intense Nuts two-tone icon set — <in-icon name="..." ink accent paper field size label heat> */
(function(){
  const FLAME_OUTER = "M24 5 C29 13 36 18 36 28 C36 35.5 30.6 41 24 41 C17.4 41 12 35.5 12 28 C12 19 20 14 24 5 Z";
  const FLAME_INNER = "M24 20 C26.5 24 30 26 30 30.5 C30 34 27.3 36.5 24 36.5 C20.7 36.5 18 34 18 30.5 C18 26.5 22 24.5 24 20 Z";
  const esc = v => String(v).replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[ch]);
  // Chipotle pod, drawn at 1024x1536; the transform in ICONS.chipotle fits it
  // to the 48x48 icon box. Body takes the ink, stem takes the accent.
  const POD_BODY = "M421.09,337.25c-8.01,3.46-15.12,8.28-21.42,14.32-6.05,5.8-6.51,14.12-.23,20.3,13.23,13.01,46.07,18.21,66.71,19.24,51.74,2.58,120.14-6.56,163.25-35.65,6.82-4.6,12.75-10.52,16.11-17.71,13.16-28.23-55.74-32.63-80.24-33.91-4.18-.65-7.71-2.28-9.8-5.24l17.6-3.6c27.39-5.64,54.66-9.08,82.65-7.64,28.43,1.47,55.38,10.42,76.82,29.07,11.71,10.19,21.24,22.04,28.19,35.83l16.73,33.22,22.34,54.62,17.16,46.91c7.88,21.54,13.97,42.49,19.29,64.96,11.68,49.3,15.9,99.43,9.37,149.84-3.04,23.49-7.51,45.63-14.9,68.02l-30.71,93.09-32.02,91.95-19.37,56.64-23.53,68.57-43.08,110.91c-29.77,69.04-69.41,137.6-118.21,194.74-31.23,36.56-93.96,99.74-143.4,82.8-12.98-4.44-24.2-12.47-32.85-22.98-26.97-32.78-33.26-79.8-29.49-121.55l4.87-53.96c1.71-18.93,2.08-37.1.4-56.03l-6.27-70.97-9.73-71.45c-16.55-105.92-38.44-210.06-67.48-313.24l-15.9-53.34c-11.56-42.26-18.59-85.06-20.94-128.89-3-56.13,4.29-110.92,36.83-157.22,20.49-29.16,49.02-48.42,81.14-63.01,18.24-7.5,36.15-13.6,55.16-18.87l4.97.23Z";
  const POD_STEM = "M555.46,298.6c2.09,2.96,5.62,4.59,9.8,5.24,24.5,1.27,93.4,5.67,80.24,33.91-3.35,7.2-9.29,13.11-16.11,17.71-43.11,29.08-111.51,38.23-163.25,35.65-20.64-1.03-53.48-6.22-66.71-19.24-6.28-6.18-5.82-14.49.23-20.3,6.3-6.04,13.42-10.86,21.42-14.32l7.13-3.08,36.45-12.45c4.44-1.52,7.56-5.07,8.34-9.99,4.64-29.37-8.4-76.41-20.29-105.41s-28.22-54.8-50.73-76.17c-15.11-14.35-36.56-28.12-56.52-33.71-22.97-6.42-53.75-5.79-59.22,17.82-2.2,9.49-7.27,17.96-15.54,23.41-11.73,7.73-26.33,6.33-36.83-2-21.96-17.43-10.32-47.08,10.51-66.41,34.04-31.59,85.46-34.89,129.23-20.62,24.41,7.96,45.86,21.7,64.61,39.1,30.78,28.56,52.05,66.59,67.73,105.24l17.9,44.12c6.07,14.97,12.06,29.24,19.34,43.61,3.36,6.64,6.73,12.9,12.29,17.9Z";
  // Garlic bulb, drawn at 538x580; the transform in ICONS.garlic fits it to the
  // 48x48 box. Bulb takes the ink, clove lines the paper, root fringe the accent.
  const BULB_BODY = "M181.06,521.52c10.07,6.16,20.77,9.02,32.14,10.29l13.68-.03c13.48-1.13,26.15-4.62,38.54-9.74,28.42,11.44,57.39,15.25,84.67-.54l11.9,1.49,8.15.79,22.2-.05c12.23-.92,23.82-3.25,35.14-7.73,33.79-13.38,53.2-42.3,54.76-78.33l-.12-9.71c-2.47-35.91-20.97-67.83-48.02-91.09l-42.44-36.5-15.43-13.62-12.02-11.03-19.47-19.46c-8.58-8.58-15.73-17.95-22.37-28.11-8.04-12.31-14-25.13-18.37-39.16-3.74-12.03-6.57-23.92-8.02-36.44l-2.49-21.53-.9-11.5-.5-8.52-.43-5.03-.4-13.27-.53-13.97-.36-53.41-5.4,4.17c-13.35,10.31-27.83,12.54-43.91,6.31l-.33,22.42-.45,28.04-.54,10.95-.46,11.66-.52,6.79-1.06,13.35-.99,9.56-.93,7.57-1.02,6.97-.96,5.62c-2.63,15.47-6.58,30.39-12.68,44.82-8.55,20.21-23.45,41.39-38.81,56.71l-14.04,14-10.62,9.88-18.03,16.01-42.96,36.97c-26.94,23.18-45.55,55.57-47.77,91.35l-.02,10.58c1.94,34.48,20.28,62.25,52.19,75.95,11.9,5.11,24.25,7.68,37.21,8.71l23.12.08,7.65-.79,12.06-1.48Z";
  const BULB_ROOTS = "M260.43,564.05l7.02-.09-.25-6.02-.33-10.94c-.08-2.82-.8-5.54.08-8.53,4.32,8.47,6.12,16.72,7.24,25.97,1.9-.29,3.45-.76,5.38-1.58-1.14-8.34-3.07-15.78-5.66-24.18,7.14,7.5,11.89,16.19,13.93,26.01,1.84-.7,2.95-1.44,4.19-2.73l-9.12-21.28c7.12,5.46,11.08,12.03,15.62,19.27l4.17-5.06c-3.34-5.7-7.02-10.29-12.09-15,8.43.96,14.79,5.7,20.67,10.87,1.02-1.77,2.23-4.47,1.51-6.02-2.53-5.47-12.36-8.89-18.84-10.19-9.8-1.97-19.17-4.63-28.36-8.62-10.69,4.29-21.26,7.6-32.57,9.06-7.16.93-15.24,4.33-18.6,10.44l2.02,5.56c6.11-5.66,12.56-10.05,20.87-11.19-4.83,4.85-8.79,8.98-12.11,14.75l3.88,5.43c4.59-7.24,8.87-13.79,15.72-19.23-3.38,7.54-6.72,14.05-8.99,21.53l3.99,2.59c1.71-7.27,4.43-13.48,8.65-19.4,1.56-2.19,2.85-4.48,5.21-6.3l-4.83,19.21c-.37,1.49-.35,3.28-.24,4.93l5.01,1.2c.97-9.04,2.54-17.5,7.07-25.86.79,3.5-.03,6.88-.07,10.3l-.18,15.1Z";
  const BULB_CLOVES = ["M284.39,511.64c7.63-26.14,14.38-50.88,17.18-77.05l1.07-8.61,1.14-15.3v-32.85s-1.19-14.87-1.19-14.87c-3.05-32.43-11.88-62.89-25.23-93.46,11.51,14.07,19.95,29.76,27.03,46.07,8.55,19.7,13.71,40.17,15.93,61.45l.57,8.46.56,7.01-.18,10.42c-1.44,38.76-13.39,76.78-36.86,108.73Z", "M211.36,422.94l-1.06-11.9-.42-5.57v-17.45s.43-6.08.43-6.08l1.1-11.03c3.06-23.01,9.67-45.11,20.09-65.95,6.22-12.44,12.97-24.54,22.15-35.41-14.3,32.38-23.16,65.08-25.84,99.59l-.6,9.11-.13,31.16.49,6.17c1.96,32.71,9.26,63.79,19.1,96.06-19.5-26.32-30.8-56.84-35.32-88.7Z", "M367.77,486.53c-5.82,8.03-11.77,15.38-19.57,21.83,6.68-11.55,13.05-21.82,18.18-33.54,18.54-42.33,19.72-82.84-2.02-124.24-7.63-14.52-17.41-26.91-28.26-39.79,11.02,6.14,19.67,14.44,27.9,23.17,16.99,18.95,27.24,42.36,29.21,67.73l.16,15.34-.89,8.54c-2.96,22.14-11.44,42.65-24.71,60.96Z", "M182.69,508.26c-11.97-10.38-21.27-23.04-28.79-36.59-12.46-22.44-18.75-49.64-15.46-75.19,1.85-14.34,6.02-27.87,13.06-40.47,8.35-14.96,19.33-27.71,32.96-38.01,3.69-2.79,6.83-5.73,11.26-7.64-8.89,10.15-16.87,19.88-23.76,31.12-23.83,38.88-27.77,79.17-11.85,121.95,5.44,15.9,13.67,29.52,22.58,44.83Z"];
  function ht(id, color, r, step, op){
    return `<pattern id="${id}" width="${step}" height="${step}" patternUnits="userSpaceOnUse" patternTransform="rotate(18)"><circle cx="${r*1.4}" cy="${r*1.4}" r="${r}" fill="${color}" opacity="${op}"/></pattern>`;
  }
  const ICONS = {
    cashew(c){ return `<defs>${ht('h',c.paper,0.8,4.6,0.3)}<mask id="m"><rect width="48" height="48" fill="black"/><circle cx="22" cy="27" r="16" fill="white"/><circle cx="30" cy="18" r="12.5" fill="black"/></mask></defs>
      <g mask="url(#m)"><rect width="48" height="48" fill="${c.ink}"/><rect width="48" height="48" fill="url(#h)"/></g>
      <path d="M10 32 a15 15 0 0 0 9 9" fill="none" stroke="${c.accent}" stroke-width="3" stroke-linecap="round"/>`; },
    peanut(c){ return `<defs>${ht('h',c.paper,0.8,4.6,0.3)}<clipPath id="cp"><ellipse cx="24" cy="15.5" rx="9" ry="11"/><ellipse cx="24" cy="33" rx="10.5" ry="12"/></clipPath></defs>
      <ellipse cx="24" cy="15.5" rx="9" ry="11" fill="${c.ink}"/><ellipse cx="24" cy="33" rx="10.5" ry="12" fill="${c.ink}"/>
      <g clip-path="url(#cp)"><rect width="48" height="48" fill="url(#h)"/><path d="M17 10 q7 5 14 0 M16 22 q8 6 16 0 M16 34 q8 6 16 0" stroke="${c.paper}" stroke-width="1.4" fill="none" opacity="0.85"/></g>
      <path d="M17 9 a9 9 0 0 1 5 -3" fill="none" stroke="${c.accent}" stroke-width="2.6" stroke-linecap="round"/>`; },
    macadamia(c){ return `<defs>${ht('h',c.paper,0.8,4.6,0.3)}<clipPath id="cp"><circle cx="24" cy="26" r="15"/></clipPath></defs>
      <circle cx="24" cy="26" r="15" fill="${c.ink}"/><g clip-path="url(#cp)"><rect width="48" height="48" fill="url(#h)"/><path d="M24 11 q-4 8 1 15 q4 6 1 15" stroke="${c.paper}" stroke-width="2" fill="none"/></g>
      <path d="M11.5 21 a15 15 0 0 1 8 -8" fill="none" stroke="${c.accent}" stroke-width="3" stroke-linecap="round"/>`; },
    chipotle(c){ return `<g transform="translate(9.781,3.923) scale(0.026559)"><path d="${POD_BODY}" fill="${c.ink}"/><path d="${POD_STEM}" fill="${c.accent}"/></g>`; },
    thaichili(c){ return `<path d="M11 37 C15 29 24 19 36 13" stroke="${c.ink}" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M36 13 C38 10 41 9 43.5 10" stroke="${c.accent}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <circle cx="11" cy="37" r="2" fill="${c.accent}"/>`; },
    lime(c){ return `<circle cx="24" cy="27" r="14" fill="${c.ink}"/>
      <path d="M24 17 v20 M14 27 h20 M17 20 l14 14 M31 20 l-14 14" stroke="${c.paper}" stroke-width="1.6" opacity="0.9"/>
      <circle cx="24" cy="27" r="9.5" fill="none" stroke="${c.paper}" stroke-width="1.2" opacity="0.6"/>
      <ellipse cx="34" cy="9.5" rx="6" ry="3" fill="${c.accent}" transform="rotate(-28 34 9.5)"/>`; },
    coconut(c){ return `<defs>${ht('h',c.paper,0.8,4.6,0.3)}<clipPath id="cp"><circle cx="24" cy="27" r="15"/></clipPath></defs>
      <circle cx="24" cy="27" r="15" fill="${c.ink}"/><g clip-path="url(#cp)"><rect width="48" height="48" fill="url(#h)"/></g>
      <circle cx="19" cy="22" r="2" fill="${c.paper}"/><circle cx="29" cy="22" r="2" fill="${c.paper}"/><circle cx="24" cy="30" r="2" fill="${c.paper}"/>
      <path d="M11 19 a15 15 0 0 1 26 0" fill="none" stroke="${c.accent}" stroke-width="3" stroke-linecap="round"/>`; },
    garlic(c){ return `<g transform="translate(5.297,3.217) scale(0.070429)"><path d="${BULB_BODY}" fill="${c.ink}"/>${BULB_CLOVES.map(d => `<path d="${d}" fill="${c.paper}"/>`).join("")}<path d="${BULB_ROOTS}" fill="${c.accent}"/></g>`; },
    salt(c){ return `<rect x="15" y="17" width="10" height="10" fill="${c.ink}" transform="rotate(45 20 22)"/>
      <rect x="26" y="24" width="8" height="8" fill="${c.ink}" transform="rotate(45 30 28)"/>
      <rect x="18" y="31" width="6" height="6" fill="${c.ink}" transform="rotate(45 21 34)"/>
      <path d="M36 10 v9 M31.5 14.5 h9" stroke="${c.accent}" stroke-width="2.5" stroke-linecap="round"/>`; },
    honey(c){ return `<path d="M22 10 C26.5 18 31 22 31 29 C31 34.5 27 38.5 22 38.5 C17 38.5 13 34.5 13 29 C13 22 17.5 18 22 10 Z" fill="${c.ink}"/>
      <path d="M18 29 a4.5 4.5 0 0 0 2.6 5.4" stroke="${c.paper}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.9"/>
      <path d="M37 7 l5 3 v6 l-5 3 -5 -3 v-6 Z" fill="none" stroke="${c.accent}" stroke-width="2.2"/>`; },
    flame(c){ return `<path d="${FLAME_OUTER}" fill="${c.ink}"/><path d="${FLAME_INNER}" fill="${c.accent}"/>`; },
    instagram(c){ return `<rect x="10" y="10" width="28" height="28" rx="8.5" fill="none" stroke="${c.ink}" stroke-width="3"/>
      <circle cx="24" cy="24" r="7" fill="none" stroke="${c.ink}" stroke-width="3"/><circle cx="32.4" cy="15.6" r="2.2" fill="${c.accent}"/>`; },
    facebook(c){ return `<circle cx="24" cy="24" r="15" fill="${c.ink}"/>
      <path d="M26.2 39 v-11 h3.6 l0.7 -4.4 h-4.3 v-2.8 c0 -1.2 0.6 -2.4 2.5 -2.4 h2 V14.6 c0 0 -1.8 -0.3 -3.5 -0.3 c-3.6 0 -5.9 2.2 -5.9 6.1 v3.2 h-3.9 v4.4 h3.9 V39 Z" fill="${c.paper}"/>`; }
  };
  // heat = how many of the three flames are lit, 1 (mild) to 3 (hottest).
  // The rest are drawn as outlines so the scale reads on its own.
  function badge(c, label, heat){
    const n = Math.min(3, Math.max(1, parseInt(heat, 10) || 1));
    const s = 0.7, fw = 24 * s, gap = 4, span = 3 * fw + 2 * gap;
    let flames = '';
    for(let i = 0; i < 3; i++){
      const x = (60 - span / 2 + i * (fw + gap)) - 12 * s;
      const open = `<g transform="translate(${x.toFixed(2)},${(60 - 23 * s).toFixed(2)}) scale(${s})">`;
      flames += i < n
        ? `${open}<path d="${FLAME_OUTER}" fill="${c.ink}"/><path d="${FLAME_INNER}" fill="${c.accent}"/></g>`
        : `${open}<path d="${FLAME_OUTER}" fill="none" stroke="${c.ink}" stroke-width="3" opacity="0.3"/></g>`;
    }
    // Two explicit half-arcs (a near-zero chord leaves the circle centre ambiguous).
    // Starts bottom centre, clockwise via the left, so 50% along is top centre.
    return `<circle cx="60" cy="60" r="56" fill="none" stroke="${c.accent}" stroke-width="2" stroke-dasharray="5 4"/>
      <circle cx="60" cy="60" r="38" fill="none" stroke="${c.accent}" stroke-width="1.2"/>
      ${flames}
      <defs><path id="tp" d="M60 103.5 A43.5 43.5 0 0 1 60 16.5 A43.5 43.5 0 0 1 60 103.5" fill="none"/></defs>
      <text text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="10" letter-spacing="1.5" fill="${c.ink}"><textPath href="#tp" startOffset="50%">${esc(label)}</textPath></text>`;
  }
  class InIcon extends HTMLElement{
    static get observedAttributes(){ return ['name','ink','accent','paper','field','size','label','heat']; }
    // connectedCallback covers the first paint; without this guard every
    // observed attribute triggers its own render during upgrade.
    attributeChangedCallback(){ if(this.isConnected) this.render(); }
    connectedCallback(){ this.render(); }
    render(){
      if(!this.shadowRoot) this.attachShadow({mode:'open'});
      const g = (a,d)=> this.getAttribute(a)||d;
      const c = { ink:g('ink','#1F1D1A'), accent:g('accent','#E0562A'), paper:g('paper','#F1EBDD'), field:g('field','') };
      const name = g('name','flame'), size = g('size','48');
      let vb=48, inner='';
      if(name==='badge'){ vb=120; inner = badge(c, g('label','INTENSE NUT'), g('heat','1')); }
      else inner = (ICONS[name]||ICONS.flame)(c);
      const bg = c.field ? `<circle cx="${vb/2}" cy="${vb/2}" r="${vb/2}" fill="${c.field}"/>` : '';
      this.shadowRoot.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 ${vb} ${vb}" style="display:block" role="img" aria-label="${esc(name)}">${bg}${inner}</svg>`;
    }
  }
  if(!customElements.get('in-icon')) customElements.define('in-icon', InIcon);
})();
