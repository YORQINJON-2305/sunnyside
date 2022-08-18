var elBurgerBtn = document.querySelector(".header__burger");
var elHeader = document.querySelector(".header");

elBurgerBtn.addEventListener("click", function(){
    elHeader.classList.toggle("header--active");
})