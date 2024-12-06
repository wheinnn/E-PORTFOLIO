// toggle menu
const hamburgerMenu = document.getElementById('hamburger-menu')
const menuList = document.getElementById('menu-list')

hamburgerMenu.addEventListener('click', () => {
     menuList.classList.toggle('active')
})