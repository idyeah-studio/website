<script>
document.addEventListener('mousemove', function(e) {
    const spotlight = document.querySelector('.spotlight');
    spotlight.style.left = `${e.pageX - 100}px`;
    spotlight.style.top = `${e.pageY - 100}px`;
});
</script>