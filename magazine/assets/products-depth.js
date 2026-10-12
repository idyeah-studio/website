(() => {
  const motion = matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)');
  const root = document.body;
  let frame = 0;
  let targetX = 0, targetY = 0, x = 0, y = 0;
  const paint = () => {
    x += (targetX - x) * 0.075;
    y += (targetY - y) * 0.075;
    root.style.setProperty('--depth-x', x.toFixed(4));
    root.style.setProperty('--depth-y', y.toFixed(4));
    if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.001) frame = requestAnimationFrame(paint);
    else frame = 0;
  };
  const aim = (nextX, nextY) => {
    targetX = nextX; targetY = nextY;
    if (!frame) frame = requestAnimationFrame(paint);
  };
  const move = event => {
    if (!motion.matches || event.pointerType === 'touch') return;
    // Keep the action stationary while the user targets either product.
    if (event.target.closest('.catalog-product')) return;
    aim((event.clientX / innerWidth - 0.5) * 2, (event.clientY / innerHeight - 0.5) * 2);
  };
  document.addEventListener('pointermove', move, {passive:true});
  document.documentElement.addEventListener('pointerleave', () => aim(0, 0));
  window.addEventListener('blur', () => aim(0, 0));
  document.addEventListener('focusin', event => {if(event.target.closest('.catalog-product')) aim(0,0);});
  motion.addEventListener('change', () => {
    cancelAnimationFrame(frame); frame = 0;
    targetX = targetY = x = y = 0;
    root.style.setProperty('--depth-x', '0'); root.style.setProperty('--depth-y', '0');
  });
})();
