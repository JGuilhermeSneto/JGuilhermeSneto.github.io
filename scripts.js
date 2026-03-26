
  // STARS
  const sc = document.getElementById('starsContainer');
  for(let i=0;i<80;i++){
    const s=document.createElement('span');
    s.style.left=Math.random()*100+'%';
    s.style.top=Math.random()*100+'%';
    s.style.animationDelay=(Math.random()*3)+'s';
    s.style.animationDuration=(1.5+Math.random()*3)+'s';
    if(Math.random()>.7) s.style.background='#bf00ff';
    if(Math.random()>.85){ s.style.background='#ffe600'; s.style.width='2px'; s.style.height='2px'; }
    sc.appendChild(s);
  }
 
  // SCROLL REVEAL
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
 
  // XP BAR tick
  const xp=document.getElementById('xpBar');
  let t=0;
  setInterval(()=>{t=(t+1)%3; xp.style.width=['65%','68%','65%'][t];},700);
 
  // CURSOR TRAIL
  document.addEventListener('mousemove',e=>{
    const d=document.createElement('div');
    d.className='trail';
    d.style.left=e.clientX+'px';
    d.style.top=e.clientY+'px';
    document.body.appendChild(d);
    setTimeout(()=>{d.style.opacity='0';d.style.transition='opacity 0.2s step-end';setTimeout(()=>d.remove(),200);},80);
  });
 
  // KONAMI
  const k=[38,38,40,40,37,39,37,39,66,65];
  let p=0;
  document.addEventListener('keydown',e=>{
    if(e.keyCode===k[p])p++; else p=0;
    if(p===k.length){
      document.body.style.filter='hue-rotate(180deg)';
      setTimeout(()=>document.body.style.filter='',2000);
      p=0;
    }
  });