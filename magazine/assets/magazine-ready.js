/* Shared publication behavior: landscape presentation, keyboard access, and dialogs. */
(()=>{
 // Retain keyboard focus cues without leaving rings after clicks or taps.
 const inputRoot=document.documentElement;
 document.addEventListener('pointerdown',()=>{inputRoot.dataset.inputMode='pointer';},true);
 document.addEventListener('keydown',event=>{
  if(!event.metaKey&&!event.ctrlKey&&!event.altKey)inputRoot.dataset.inputMode='keyboard';
 },true);
 const portrait=matchMedia('(orientation: portrait)'), touch=matchMedia('(pointer: coarse)');
 const gate=document.createElement('section');gate.className='orientation-gate';gate.hidden=true;gate.setAttribute('aria-label','Landscape viewing');gate.tabIndex=-1;
 gate.innerHTML='<span class="rotate-device" aria-hidden="true"></span><h1>A magazine, best opened sideways.</h1><p>Turn your phone to landscape, or widen this window, to explore idyeah.</p><a href="mailto:vishal@idyeah.studio">Write to me</a>';
 document.body.append(gate);
 const previous=new Map();let focused=null;
 function orient(){
  const portraitCover=(document.body.hasAttribute('data-portrait-cover')||document.body.hasAttribute('data-portrait-page'))&&matchMedia('(max-width:760px)').matches;
  const blocked=portrait.matches&&matchMedia('(max-width:1024px)').matches&&!portraitCover;
  // Keep one device viewport through rotation. Changing its width after the
  // fold has measured the page desynchronizes Safari's layout and clip geometry.
  if(blocked&&gate.hidden){
   focused=document.activeElement;gate.hidden=false;
   for(const child of document.body.children){if(child!==gate&&!['SCRIPT','STYLE'].includes(child.tagName)){previous.set(child,child.inert);child.inert=true;}}
   gate.focus({preventScroll:true});
  }else if(!blocked&&!gate.hidden){
   gate.hidden=true;for(const [el,value] of previous)el.inert=value;previous.clear();
   if(focused?.isConnected)focused.focus({preventScroll:true});
  }
 }
 addEventListener('resize',orient);portrait.addEventListener('change',orient);touch.addEventListener('change',orient);
 if(document.body.hasAttribute('data-portrait-cover'))new MutationObserver(orient).observe(document.body,{attributes:true,attributeFilter:['class']});
 orient();
 const main=document.querySelector('main');
 if(main){main.id ||= 'main-content';main.tabIndex=-1;const skip=document.createElement('a');skip.className='skip-magazine';skip.href=location.pathname+location.search+'#'+main.id;skip.textContent='Skip to content';document.body.prepend(skip);}
 // Native dialogs handle Escape and trap focus; explicitly restore the opener.
 document.querySelectorAll('dialog').forEach(dialog=>{
  let opener=null;
  document.addEventListener('click',event=>{if(!dialog.open&&event.target.closest('button'))opener=event.target.closest('button');},true);
  dialog.addEventListener('close',()=>{dialog.querySelectorAll('video').forEach(v=>v.pause());opener?.focus({preventScroll:true});});
 });
})();
