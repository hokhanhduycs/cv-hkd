const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navlist");

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
})