let menuButton = document.querySelector('.open-menu');
let navMenu = document.querySelector('.navigation');
menuButton.addEventListener('click', showMenu)
function showMenu() {
    navMenu.classList.toggle('active');
}