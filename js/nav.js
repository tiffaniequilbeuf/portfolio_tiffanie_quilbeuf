const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.list-menu');

burgerBtn.addEventListener('click', function() {
    const menuState = JSON.parse(burgerBtn.getAttribute('aria-expanded'));
    burgerBtn.setAttribute('aria-expanded', !menuState);
    menu.hidden = !menu.hidden;

    if(!menuState) {
        menu.addEventListener('transitionend', function() {
            menu.querySelector('a').focus();
        })
    }
})