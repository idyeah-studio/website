(() => {
 const asset = '/magazine/assets/mosaix/';
 const slides = [
  ['today','Today','One clear place to start.','A first task, a friendly face, and a little room to settle in.','Mosaix Today screen welcoming a new employee with one clear first step'],
  ['full-plan','The plan','The whole journey. The next small step.','Assimilate, build, and assess, with later stages visible before they open.','Mosaix six-month plan showing Assimilate, Build and Assess stages'],
  ['learning','Learning','Learning arrives when it’s useful.','Weekly learning, connected to the skills the role needs.','Mosaix day-90 learning plan with an unlocked focus and courses'],
  ['people','People','A person, not another task.','Introductions have context. Support is always close by.','Mosaix person detail with context for meeting a colleague and scheduling coffee'],
  ['skills','Skills','A clearer picture of your strengths.','Skills and growth areas, brought together in one view.','Mosaix skills overview with proficiency levels and a selected skill detail'],
  ['assessment','Assessment','Reflection, without the long form.','A short self-assessment with clear choices and room to reflect.','Mosaix self-assessment screen with selectable skill levels']
 ];
 const image = document.getElementById('gallery-image');
 const buttons = [...document.querySelectorAll('[data-slide]')];
 const detail = document.getElementById('screen-detail');
 let current = 0, transition = 0;
 const pad = n => String(n).padStart(2,'0');
 function show(index) {
  current = (index + slides.length) % slides.length;
  const [file,category,title,caption,alt] = slides[current];
  clearTimeout(transition);
  image.classList.add('switching');
  transition = setTimeout(() => {
   image.src = asset + file + '.webp'; image.alt = alt;
   document.getElementById('slide-category').textContent = pad(current+1)+' / '+category.toUpperCase();
   document.getElementById('slide-title').textContent = title;
   document.getElementById('slide-caption').textContent = caption;
   document.getElementById('slide-count').textContent = pad(current+1)+' / '+pad(slides.length);
   buttons.forEach((b,i) => b.setAttribute('aria-pressed',String(i===current)));
   image.decode().catch(() => {}).finally(() => image.classList.remove('switching'));
  },matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 150);
 }
 document.getElementById('next').addEventListener('click',()=>show(current+1));
 document.getElementById('previous').addEventListener('click',()=>show(current-1));
 buttons.forEach(b=>b.addEventListener('click',()=>show(Number(b.dataset.slide))));
 document.querySelector('.gallery').addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();show(current+(e.key==='ArrowRight'?1:-1));}
 });
 document.getElementById('inspect').addEventListener('click',()=>{
  const [file,category,,,alt]=slides[current];
  document.getElementById('detail-image').src=asset+file+'.webp';
  document.getElementById('detail-image').alt=alt;
  document.getElementById('detail-title').textContent='Mosaix / '+category;
  detail.showModal();document.body.classList.add('modal-open');
  document.querySelector('.detail-scroll').scrollTo(0,0);
 });
 document.getElementById('close-detail').addEventListener('click',()=>detail.close());
 detail.addEventListener('close',()=>document.body.classList.remove('modal-open'));
 const fill=document.getElementById('bf-fill');
 const stops=[...document.querySelectorAll('[data-day]')];
 const widths=[16,62.5,267,534];
 let timers=[],started=false;
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 function stop(){timers.forEach(clearTimeout);timers=[];}
 function day(i){fill.setAttribute('width',widths[i]);stops.forEach((b,j)=>b.setAttribute('aria-pressed',String(i===j)));}
 function play(){stop();day(0);[1,2,3].forEach((n)=>timers.push(setTimeout(()=>day(n),n*2200)));}
 stops.forEach((b,i)=>b.addEventListener('click',()=>{started=true;stop();day(i);}));
 document.getElementById('replay').addEventListener('click',play);
 if(reduce.matches){day(3);started=true;}
 const observer=new IntersectionObserver(entries=>{if(entries[0].isIntersecting&&!started){started=true;play();}},{threshold:.4});
 observer.observe(document.querySelector('.butterfly-art'));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
})();
