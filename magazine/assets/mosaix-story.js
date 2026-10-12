(()=>{
const detail=document.querySelector('#screen-detail'),image=document.querySelector('#detail-image'),viewport=document.querySelector('.detail-viewport');
document.querySelectorAll('[data-screen]').forEach(button=>button.addEventListener('click',()=>{image.src='./assets/mosaix/'+button.dataset.screen+'.webp';image.alt=button.dataset.label;document.querySelector('#detail-title').textContent=button.dataset.label;detail.showModal();document.querySelector('.viewer').focus({preventScroll:true});viewport.scrollTo(0,0)}));
document.querySelector('#close-detail').addEventListener('click',()=>detail.close());
detail.addEventListener('click',e=>{if(e.target===detail)detail.close()});
})();

(()=>{
 const video=document.querySelector('#mosaix-reel'),play=document.querySelector('.mosaix-reel-play'),poster=document.querySelector('.mosaix-reel-poster');
 if(!video||!play||!poster)return;
 function showPoster(){
  video.controls=false;
  video.hidden=true;
  poster.hidden=false;
  play.hidden=false;
 }
 showPoster();
 play.addEventListener('click',()=>{
  play.hidden=true;
  poster.hidden=true;
  video.hidden=false;
  video.controls=true;
  video.play().catch(showPoster);
 });
 video.addEventListener('ended',()=>{
  video.currentTime=0;
  showPoster();
 });
})();
