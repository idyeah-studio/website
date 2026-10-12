(()=>{
const dialog=document.querySelector('#screen-detail'),video=document.querySelector('#case-film');
const films={action:{ratio:3024/1588,src:'./assets/mira-walkthrough-web.mp4',title:'MIRA in action',poster:'/assets/idyeah/work/mira-action-poster.jpg'}};
document.querySelectorAll('[data-film]').forEach(button=>button.addEventListener('click',()=>{const film=films[button.dataset.film];dialog.style.setProperty('--film-ratio',film.ratio);video.src=film.src;video.poster=film.poster;document.querySelector('#film-title').textContent=film.title;dialog.showModal();document.querySelector('.viewer').focus({preventScroll:true});video.play().catch(()=>{});}));
document.querySelector('#close-detail').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
dialog.addEventListener('close',()=>{video.pause();video.removeAttribute('src');video.load()});
})();
