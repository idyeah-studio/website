(()=>{
const detail=document.querySelector('#screen-detail'),image=document.querySelector('#detail-image'),viewport=document.querySelector('.detail-viewport');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{const mobile=button.classList.contains('phone-plate');image.hidden=mobile;document.querySelector('.mobile-gallery').hidden=!mobile;image.src=button.dataset.image;viewport.classList.toggle('mobile-view',mobile); image.alt=button.dataset.label;document.querySelector('#detail-title').textContent=mobile?'Rialty · Assistant, transactions & conversations':button.dataset.label;detail.showModal();document.querySelector('.viewer').focus({preventScroll:true});viewport.scrollTo(0,0)}));
document.querySelector('#close-detail').addEventListener('click',()=>detail.close());
detail.addEventListener('click',e=>{if(e.target===detail)detail.close()});
})();
