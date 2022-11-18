const dropMenu = document.querySelector('#dropDown')
const menuList = document.querySelector('#menu')

dropMenu.addEventListener('click', () => {
    menuList.classList.toggle('active')
    dropMenu.classList.toggle('active-btn')
})

addEventListener("load", () => {
    const loader =  document.querySelector(".loader")
    
    loader.classList.add("loader-hidden")

    document.querySelector(".loader").addEventListener("transitionend", () => {
        document.body.removeChild(document.querySelector(".loader"))
    })
})