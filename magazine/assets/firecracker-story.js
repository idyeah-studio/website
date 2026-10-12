(()=>{
 const thumbs=[...document.querySelectorAll('.slide-thumb[data-slide]')],featured=document.querySelector('#featured-image'),featuredButton=document.querySelector('#featured-slide-button');
 const film=document.querySelector('#firecracker-film'),video=document.querySelector('#firecracker-reel'),poster=document.querySelector('.firecracker-reel-poster'),play=document.querySelector('.firecracker-reel-play'),reelThumb=document.querySelector('.reel-thumb'),enlarge=document.querySelector('#enlarge-slide');
 const mediaThumbs=[reelThumb,...thumbs];
 const dialog=document.querySelector('#screen-detail'),detail=document.querySelector('#detail-image'),viewport=document.querySelector('.detail-viewport');
 const title=document.querySelector('#slide-title'),position=document.querySelector('#slide-position'),detailTitle=document.querySelector('#detail-title'),zoomButton=document.querySelector('#zoom-slide');
 let current=0,requested=0,opener=null;
 function showPoster(){video.controls=false;video.hidden=true;poster.hidden=false;play.hidden=false}
 function showReel(){
  requested=-1;video.pause();video.currentTime=0;showPoster();
  film.hidden=false;featuredButton.hidden=true;enlarge.hidden=true;
  title.textContent='Showreel';position.textContent='20 seconds';
  reelThumb.setAttribute('aria-pressed','true');thumbs.forEach(button=>button.setAttribute('aria-pressed','false'));
 }
 function resetZoom(){viewport.classList.remove('is-zoomed');zoomButton.setAttribute('aria-pressed','false');viewport.scrollTop=0;viewport.scrollLeft=0}
 async function select(index){
  const next=(index+thumbs.length)%thumbs.length;requested=next;const slide=thumbs[next];
  const preload=new Image();preload.src=slide.dataset.src;try{await preload.decode()}catch(error){return}
  if(requested!==next)return;current=next;
  video.pause();showPoster();film.hidden=true;featuredButton.hidden=false;enlarge.hidden=false;reelThumb.setAttribute('aria-pressed','false');
  featured.src=slide.dataset.src;featured.alt=slide.dataset.alt;featuredButton.setAttribute('aria-label','Enlarge '+slide.dataset.caption.toLowerCase()+' slide');
  title.textContent=slide.dataset.caption;position.textContent=String(next+1).padStart(2,'0')+' / '+String(thumbs.length).padStart(2,'0');
  thumbs.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===next)));
  detail.src=slide.dataset.src;detail.alt=slide.dataset.alt;detailTitle.textContent=slide.dataset.caption;resetZoom();
 }
 function openDetail(event){opener=event.currentTarget;detail.src=featured.src;detail.alt=featured.alt;detailTitle.textContent=title.textContent;resetZoom();dialog.showModal();document.querySelector('#close-detail').focus({preventScroll:true})}
 thumbs.forEach((button,index)=>button.addEventListener('click',()=>select(index)));
 reelThumb.addEventListener('click',showReel);
 mediaThumbs.forEach((button,index)=>{
  button.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();const next=(index+(event.key==='ArrowRight'?1:-1)+mediaThumbs.length)%mediaThumbs.length;mediaThumbs[next].focus();if(next===0)showReel();else select(next-1)}});
 });
 play.addEventListener('click',()=>{play.hidden=true;poster.hidden=true;video.hidden=false;video.controls=true;video.play().catch(showPoster)});
 video.addEventListener('ended',()=>{video.currentTime=0;showPoster()});
 showReel();
 featuredButton.addEventListener('click',openDetail);enlarge.addEventListener('click',openDetail);
 document.querySelector('#close-detail').addEventListener('click',()=>dialog.close());
 document.querySelector('#previous-slide').addEventListener('click',()=>select(current-1));document.querySelector('#next-slide').addEventListener('click',()=>select(current+1));
 zoomButton.addEventListener('click',()=>{const zoomed=viewport.classList.toggle('is-zoomed');zoomButton.setAttribute('aria-pressed',String(zoomed));viewport.scrollTop=0;viewport.scrollLeft=0});
 dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();select(current+(event.key==='ArrowRight'?1:-1))}});
 dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});dialog.addEventListener('close',()=>{resetZoom();opener?.focus({preventScroll:true})});
 const toggle=document.querySelector('.mobile-work-toggle'),menu=document.querySelector('#mobile-case-menu');
 function closeMenu(){toggle.setAttribute('aria-expanded','false');menu.classList.remove('is-open')}
 toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));menu.classList.toggle('is-open',!expanded)});
 menu.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();toggle.focus()}});
})();
