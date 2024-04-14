
const pageHeaderMenuBurger = document.querySelector(".pageHeaderMenuBurgerBtn");
const pageHeaderNav = document.querySelector(".pageHeaderNav");
const pageHeaderClose = document.querySelector(".pageHeaderClose");

pageHeaderMenuBurger.addEventListener("click", ()=>{
    pageHeaderNav.style.display = "block";  
});
pageHeaderClose.addEventListener("click", ()=>{
    pageHeaderNav.style.display = "none";
});