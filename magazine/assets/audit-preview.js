(()=>{
const trigger=document.querySelector('[data-audit-preview]');
const dialog=document.querySelector('#audit-preview');
if(!trigger||!dialog)return;
const viewer=dialog.querySelector('.audit-preview-document');
// Resolve everything against this script and the page's <base>, never the clean
// route: on /practice the page lives at /practice but its assets live in /magazine/.
// document.currentScript is only set during this first synchronous run.
const here=document.currentScript?.src||new URL('assets/audit-preview.js',document.baseURI).href;
let loading=false,loaded=false;
async function load(){
 if(loading||loaded)return;loading=true;
 try{
  const pdfjs=await import(new URL('./pdf.min.mjs',here).href);
  pdfjs.GlobalWorkerOptions.workerSrc=new URL('./pdf.worker.min.mjs',here).href;
  const pdf=await pdfjs.getDocument(new URL(trigger.dataset.auditPdf,document.baseURI).href).promise;
  const first=(await pdf.getPage(1)).getViewport({scale:1});
  viewer.replaceChildren();
  // A long report is laid out as placeholders, and each page renders only as it
  // nears the viewport, so a hundred pages never sit in memory at once.
  const render=async(holder)=>{
   if(holder.dataset.state)return;holder.dataset.state='rendering';
   const n=Number(holder.dataset.page),page=await pdf.getPage(n),base=page.getViewport({scale:1});
   holder.style.aspectRatio=base.width+'/'+base.height;
   const viewport=page.getViewport({scale:Math.min(1800/base.width,2.5)});
   const canvas=document.createElement('canvas');canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Audit page '+n+' of '+pdf.numPages);
   canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
   await page.render({canvasContext:canvas.getContext('2d'),viewport}).promise;
   holder.append(canvas);holder.dataset.state='done';
  };
  const watch=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){watch.unobserve(entry.target);render(entry.target).catch(error=>console.error('Audit preview page:',error));}}),{root:viewer,rootMargin:'1200px 0px'});
  for(let n=1;n<=pdf.numPages;n++){
   const holder=document.createElement('figure');holder.className='audit-pdf-page';holder.dataset.page=n;holder.style.aspectRatio=first.width+'/'+first.height;
   viewer.append(holder);watch.observe(holder);
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
