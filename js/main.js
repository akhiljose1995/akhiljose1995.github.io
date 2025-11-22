// main.js - lightweight helpers: canvas background (subtle gradient particles), typing effect, mobile nav
document.addEventListener('DOMContentLoaded', ()=>{

  // set year
  const y = new Date().getFullYear();
  ['year'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });


  // mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if(toggle && navList){
    toggle.addEventListener('click', ()=>{
      navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });
  }


  // typing effect
  const phrases = ['ML Engineer', 'Data Scientist', 'Trading Automation', 'RAG & LLMs'];
  const typedEl = document.getElementById('typed-text');
  let pi = 0, ci = 0, forward = true;

  function tick(){
    const phrase = phrases[pi];

    if(forward){
      ci++;
      if(ci <= phrase.length) typedEl.textContent = phrase.slice(0,ci);
      else { forward = false; setTimeout(tick,800); return; }

    } else {
      ci--;
      if(ci >= 0) typedEl.textContent = phrase.slice(0,ci);
      else { forward = true; pi = (pi+1) % phrases.length; }
    }

    setTimeout(tick, forward ? 90 : 40);
  }
  tick();


  // canvas background (subtle moving dots)
  const canvas = document.getElementById('bg-canvas');
  if(canvas){
    const ctx = canvas.getContext('2d');

    function resize(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6;
    }
    resize();
    window.addEventListener('resize', resize);

    const dots = [];
    for(let i=0; i<60; i++){
      dots.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*1.6 + 0.4,
        vx: (Math.random()-0.5)*0.3,
        vy: (Math.random()-0.5)*0.3,
        alpha: Math.random()*0.6 + 0.2
      });
    }

    function render(){
      ctx.clearRect(0,0,canvas.width,canvas.height);

      // subtle gradient background
      const g = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
      g.addColorStop(0,'rgba(17,24,39,0.85)');
      g.addColorStop(1,'rgba(6,7,10,0.9)');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,canvas.width,canvas.height);

      // draw dots
      for(const d of dots){
        d.x += d.vx;
        d.y += d.vy;

        if(d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if(d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(125,211,252,${d.alpha})`;
        ctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
        ctx.fill();
      }

      requestAnimationFrame(render);
    }

    render();
  }

}); // END of DOMContentLoaded
