const preloader = document.querySelector('.wrapper');

const fadeEffect = setInterval(() => {
    preloader.classList.add('closePre');
}, 1000);

window.addEventListener('load', fadeEffect);