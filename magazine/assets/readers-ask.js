/* Readers ask: one spread, no scrolling. Pick a section, tap a question, read the answer.
   Without this script every question and answer stays visible in a plain column. */
(()=>{
 const groups=[...document.querySelectorAll('.ask-group')],tabs=[...document.querySelectorAll('.ask-index a')];
 if(!groups.length)return;
 const buttons=[];
 groups.forEach((group,g)=>{
  group.querySelectorAll('.ask-item').forEach((item,i)=>{
   const heading=item.querySelector('h3'),answer=item.querySelector('.ask-answer'),button=document.createElement('button');
   answer.id=`${group.id}-answer-${i+1}`;
   button.type='button';button.className='ask-question';button.setAttribute('aria-controls',answer.id);
   button.append(...heading.childNodes);heading.append(button);
   button.addEventListener('click',()=>choose(g,i));
   button.addEventListener('keydown',event=>{
    if(event.key!=='ArrowDown'&&event.key!=='ArrowUp')return;
    const list=buttons.filter(entry=>entry.g===g),next=list[(i+(event.key==='ArrowDown'?1:-1)+list.length)%list.length];
    event.preventDefault();choose(g,next.i);next.button.focus();
   });
   buttons.push({g,i,item,button});
  });
 });
 // A bubble hugs its words: after the text wraps, trim the empty space a wrapped line leaves behind.
 function fit(){
  for(const {button} of buttons){
   button.style.width='';
   if(!button.offsetParent)continue;
   const range=document.createRange();range.selectNodeContents(button);
   const lines=[...range.getClientRects()];if(!lines.length)continue;
   const text=Math.max(...lines.map(line=>line.right))-Math.min(...lines.map(line=>line.left)),style=getComputedStyle(button);
   const extra=parseFloat(style.paddingLeft)+parseFloat(style.paddingRight)+parseFloat(style.borderLeftWidth)+parseFloat(style.borderRightWidth);
   button.style.width=Math.ceil(text+extra+2)+'px';
  }
 }
 function choose(g,i){
  groups.forEach((group,index)=>group.classList.toggle('is-current',index===g));
  tabs.forEach((tab,index)=>{tab.classList.toggle('is-current',index===g);tab.setAttribute('aria-current',index===g?'true':'false');});
  for(const entry of buttons){
   const current=entry.g===g&&entry.i===i;
   entry.item.classList.toggle('is-current',current);entry.button.setAttribute('aria-expanded',String(current));
  }  fit();
 }
 tabs.forEach((tab,g)=>tab.addEventListener('click',event=>{
  // In the one-column portrait reading view the links simply jump to their section.
  if(matchMedia('(max-width:1024px) and (orientation:portrait)').matches)return;
  event.preventDefault();choose(g,0);
 }));
 const wanted=groups.findIndex(group=>'#'+group.id===location.hash);
 choose(wanted>0?wanted:0,0);
 document.documentElement.classList.add('ask-live');
 fit();addEventListener('resize',fit);document.fonts?.ready.then(fit);
})();
