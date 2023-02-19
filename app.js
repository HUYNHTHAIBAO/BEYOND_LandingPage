const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const menuBg = document.querySelector(".menu-bg");
menuToggle.addEventListener("click", function(e)  {
    menu.classList.add("is-active");
    menuClose.classList.add("is-active");
    menuBg.classList.add("is-active");
})
menuClose.addEventListener("click", function(e) {
    menu.classList.remove("is-active");
    menuBg.classList.remove("is-active");
    this.classList.remove("is-active");
})