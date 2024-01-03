const body = document.querySelector('body');
let currentTop = 0;
let oldTop = 0;
const headerTop = document.querySelector('.header').offsetHeight;

body.setAttribute('data-scroll', false);
body.setAttribute('data-scroll-mode', 'none');

window.addEventListener('scroll', () => {
    currentTop = window.pageYOffset;

    if (currentTop === 0) body.setAttribute('data-scroll', false);
    else body.setAttribute('data-scroll', true);

    if (currentTop > headerTop) {
    if (oldTop > currentTop) {
        body.setAttribute('data-scroll-mode', 'up');
    }
    else if (oldTop < currentTop) {
        body.setAttribute('data-scroll-mode', 'down');
    }
    else {
        body.setAttribute('data-scroll-mode', 'none');
    }
    oldTop = currentTop;
    } 
    else body.setAttribute('data-scroll-mode', 'none');
});