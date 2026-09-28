(()=>{
 const dialog=document.querySelector('.product-viewer');
 if(!dialog)return;
 const image=dialog.querySelector('img');
 document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{
  image.src=button.dataset.image;image.alt=button.querySelector('img').alt;
  dialog.showModal();dialog.querySelector('.product-viewer-scroll').scrollTop=0;
 }));
 dialog.querySelector('.close-viewer').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
})();
