(()=>{
 const toggle=document.querySelector('.mobile-work-toggle'),menu=document.querySelector('#mobile-case-menu');
 const close=()=>{toggle?.setAttribute('aria-expanded','false');menu?.classList.remove('is-open')};
 toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open)});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();if(menu?.contains(document.activeElement))toggle?.focus()}});
 document.addEventListener('click',e=>{if(!e.target.closest('.case-navigation'))close()});
 const video=document.querySelector('video.audit-film'),play=document.querySelector('.audit-video-play'),poster=document.querySelector('.audit-video-poster');
 if(video&&play){const restore=()=>{video.pause();video.hidden=true;video.controls=false;if(poster)poster.hidden=false;play.hidden=false};play.addEventListener('click',()=>{video.hidden=false;video.controls=true;play.hidden=true;if(poster)poster.hidden=true;video.play().catch(restore)});video.addEventListener('ended',()=>{video.currentTime=0;restore()});video.addEventListener('error',restore)}
})();
