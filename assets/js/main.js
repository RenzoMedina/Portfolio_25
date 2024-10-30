const buttonMenu = document.getElementById("btnMenuMobile")
const menuMobile = document.getElementById("menuMobile")

buttonMenu.addEventListener("click", ()=>{
    menuMobile.classList.toggle("hidden")
})