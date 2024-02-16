function openMenu() {
    document.getElementById("menu").lastElementChild.style.left = "0%";
}

function closeMenu() {
    document.getElementById("menu").lastElementChild.style.left = "-110%";
}

function menu() {
    "use strict";
    if (document.getElementById("menu").lastElementChild.style.left === "0%") {
        closeMenu();
    } else {
        openMenu();
    }
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
}

function closeMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.remove('show-menu');
}




    
///////////POPUP/////////
function ClosePopUp(){
    var popUp = document.getElementById("popUp");
    popUp.style.display = "none";
}



        



