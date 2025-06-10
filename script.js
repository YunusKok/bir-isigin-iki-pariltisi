document.addEventListener('scroll', function() {
    let scrollValue = window.scrollY;
    document.querySelector('.sun').style.transform = `translateX(${scrollValue * 0.05}px)`;
    document.querySelector('.moon').style.opacity = 1 - (scrollValue * 0.002);
});