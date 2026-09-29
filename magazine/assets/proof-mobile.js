(()=>{
 const toggle=document.querySelector('.mobile-work-toggle'),menu=document.querySelector('#mobile-case-menu');
 function closeMenu(){toggle.setAttribute('aria-expanded','false');menu.classList.remove('is-open')}
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open)});
 menu.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();toggle.focus()}});
 toggle.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
 const viewport=document.querySelector('.detail-viewport'),dialog=document.querySelector('#screen-detail');
 if(!viewport)return;
 const portrait=matchMedia('(max-width:1024px) and (orientation:portrait)');
 function zoom(){if(!portrait.matches)return;const fraction=viewport.scrollTop/Math.max(1,viewport.scrollHeight);viewport.classList.toggle('is-zoomed');viewport.scrollTop=fraction*viewport.scrollHeight;viewport.scrollLeft=0}
 const images=viewport.querySelectorAll('img');
 function accessible(){images.forEach(image=>{if(portrait.matches){image.tabIndex=0;image.setAttribute('role','button');image.setAttribute('aria-label',image.alt?image.alt+' — toggle zoom':'Toggle image zoom')}else{image.removeAttribute('tabindex');image.removeAttribute('role');image.removeAttribute('aria-label')}})}
 images.forEach(image=>{image.addEventListener('click',zoom);image.addEventListener('keydown',e=>{if(portrait.matches&&(e.key==='Enter'||e.key===' ')){e.preventDefault();zoom()}})});
 accessible();portrait.addEventListener('change',accessible);
 dialog.addEventListener('close',()=>viewport.classList.remove('is-zoomed'));
})();
