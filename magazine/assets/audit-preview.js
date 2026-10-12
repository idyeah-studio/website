(()=>{
const trigger=document.querySelector('[data-audit-preview]');
const dialog=document.querySelector('#audit-preview');
if(!trigger||!dialog)return;
const viewer=dialog.querySelector('.audit-preview-document');
let loading=false,loaded=false;
async function load(){
 if(loading||loaded)return;loading=true;
 try{
  const pdfjs=await import('./pdf.min.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc=new URL('./pdf.worker.min.mjs',document.currentScript?.src||new URL('./assets/audit-preview.js',location.href)).href;
  const pdf=await pdfjs.getDocument(new URL(trigger.dataset.auditPdf,location.href).href).promise;
  viewer.replaceChildren();
  for(let n=1;n<=pdf.numPages;n++){
   const page=await pdf.getPage(n),base=page.getViewport({scale:1});
   const holder=document.createElement('figure');holder.className='audit-pdf-page';holder.style.aspectRatio=base.width+'/'+base.height;
   const canvas=document.createElement('canvas');canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Audit page '+n+' of '+pdf.numPages);holder.append(canvas);viewer.append(holder);
   const viewport=page.getViewport({scale:Math.min(1800/base.width,2.5)});canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
   await page.render({canvasContext:canvas.getContext('2d'),viewport}).promise;
  }
  loaded=true;
 }catch(error){viewer.replaceChildren();const message=document.createElement('p');message.className='audit-preview-status';message.textContent='The preview could not load. Please close it and try again.';viewer.append(message);console.error('Audit preview:',error);}
 finally{loading=false;}
}
trigger.addEventListener('click',event=>{
 event.preventDefault();dialog.showModal();load();
});
dialog.querySelector('.audit-preview-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('keydown',event=>event.stopPropagation());
dialog.addEventListener('close',()=>trigger.focus({preventScroll:true}));
})();
