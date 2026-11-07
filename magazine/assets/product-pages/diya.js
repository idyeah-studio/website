(()=>{
 // Copy the install command, and say so.
 document.querySelectorAll('.diya-copy').forEach(button=>button.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(button.dataset.copy);button.textContent='Copied';}
  catch(_){button.textContent='Select it';}
  clearTimeout(button._reset);button._reset=setTimeout(()=>{button.textContent='Copy'},1800);
 }));
})();
