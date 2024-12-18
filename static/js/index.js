"use strict";
const Navbar = document.querySelector(".Navbar");
const MenuBar = document.querySelector(".menu-box");
const Navbar_Menu = document.querySelector(".Navbar-Menu");

//Navbar-responsiveness:.:
MenuBar.addEventListener("click",()=>{
    Navbar_Menu.classList.toggle("active");
})


//Navbar-scrolled:.:
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 80){
        Navbar.classList.add("scrolled");
   } else{
       Navbar.classList.remove("scrolled");  
   }
});