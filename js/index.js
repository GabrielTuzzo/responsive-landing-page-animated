const dropMenu = document.querySelector('#dropDown')
const menuList = document.querySelector('#menu')

dropMenu.addEventListener('click', () => {
    menuList.classList.toggle('active')
    dropMenu.classList.toggle('active-btn')
})