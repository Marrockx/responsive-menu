let nav = document.querySelector('.nav-group');
const menu = document.querySelector('.hamburger');
const navLink = document.querySelectorAll(".nav-link");



nav.classList.add('show')

menu.addEventListener('click', openMenu);

function openMenu() {

    nav.classList.toggle('hide')
    menu.classList.toggle('active')
    menu.classList.toggle('outline')

}


navLink.forEach(n => n.addEventListener("click", closeMenu));

nav.addEventListener('click', closeMenu)

function closeMenu() {
    menu.classList.remove("active");
    nav.classList.remove("active");
    nav.classList.toggle('hide')
    menu.classList.remove('outline')
}
