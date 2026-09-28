/* Shared publication behavior: landscape presentation, keyboard access, and dialogs. */
(()=>{
 const portrait=matchMedia('(orientation: portrait)'), touch=matchMedia('(pointer: coarse)');
 const gate=document.createElement('section');gate.className='orientation-gate';gate.hidden=true;gate.setAttribute('aria-label','Landscape viewing');gate.tabIndex=-1;
 gate.innerHTML='<span class="rotate-device" aria-hidden="true"></span><h1>A magazine, best opened sideways.</h1><p>Turn your phone to landscape, or widen this window, to explore idyeah.</p><a href="mailto:vishal@idyeah.studio">Write to me</a>';
 document.body.append(gate);
 const previous=new Map();let focused=null;
 function orient(){
  const blocked=portrait.matches&&matchMedia('(max-width:1024px)').matches;
  // Preserve the landscape composition on phones. No maximum-scale restriction:
  // readers can still pinch to inspect details and use the full-size viewers.
  const viewport=document.querySelector('meta[name="viewport"]');
  const phone=touch.matches&&Math.min(screen.width,screen.height)<600;
  const content=phone&&!blocked?'width=1024,viewport-fit=cover':'width=device-width,initial-scale=1,viewport-fit=cover';
  if(viewport&&viewport.content!==content)viewport.content=content;
  if(blocked&&gate.hidden){
   focused=document.activeElement;gate.hidden=false;
   for(const child of document.body.children){if(child!==gate&&!['SCRIPT','STYLE'].includes(child.tagName)){previous.set(child,child.inert);child.inert=true;}}
   gate.focus({preventScroll:true});
  }else if(!blocked&&!gate.hidden){
   gate.hidden=true;for(const [el,value] of previous)el.inert=value;previous.clear();
   if(focused?.isConnected)focused.focus({preventScroll:true});
  }
 }
 addEventListener('resize',orient);portrait.addEventListener('change',orient);touch.addEventListener('change',orient);orient();
 const main=document.querySelector('main');
 if(main){main.id ||= 'main-content';main.tabIndex=-1;const skip=document.createElement('a');skip.className='skip-magazine';skip.href='#'+main.id;skip.textContent='Skip to content';document.body.prepend(skip);}
 // Native dialogs handle Escape and trap focus; explicitly restore the opener.
 document.querySelectorAll('dialog').forEach(dialog=>{
  let opener=null;
  document.addEventListener('click',event=>{if(!dialog.open&&event.target.closest('button'))opener=event.target.closest('button');},true);
  dialog.addEventListener('close',()=>{dialog.querySelectorAll('video').forEach(v=>v.pause());opener?.focus({preventScroll:true});});
 });
})();
