(()=>{
const detail=document.querySelector('#screen-detail'),image=document.querySelector('#detail-image'),viewport=document.querySelector('.detail-viewport');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#rialty-reel')?.pause();const mobile=button.classList.contains('phone-plate');image.hidden=mobile;document.querySelector('.mobile-gallery').hidden=!mobile;image.src=button.dataset.image;viewport.classList.toggle('mobile-view',mobile); image.alt=button.dataset.label;document.querySelector('#detail-title').textContent=mobile?'Rialty · Assistant, transactions & conversations':button.dataset.label;detail.showModal();document.querySelector('.viewer').focus({preventScroll:true});viewport.scrollTo(0,0)}));
document.querySelector('#close-detail').addEventListener('click',()=>detail.close());
detail.addEventListener('click',e=>{if(e.target===detail)detail.close()});
})();

(()=>{
 const video=document.querySelector('#rialty-reel'),play=document.querySelector('.rialty-reel-play'),poster=document.querySelector('.rialty-reel-poster');
 if(!video||!play||!poster)return;
 function showPoster(){video.controls=false;video.hidden=true;poster.hidden=false;play.hidden=false}
 showPoster();
 play.addEventListener('click',()=>{play.hidden=true;poster.hidden=true;video.hidden=false;video.controls=true;video.play().catch(showPoster)});
 video.addEventListener('ended',()=>{video.currentTime=0;showPoster()});
})();
