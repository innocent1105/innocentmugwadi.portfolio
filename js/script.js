let openMenuBtn = document.getElementById("open-menu");
let closeMenuBtn = document.getElementById("close-menu");

let menu = document.getElementById("mobile-menu");

openMenuBtn.addEventListener("click", ()=>{
    menu.style.display = "block";
})

closeMenuBtn.addEventListener("click", ()=>{
    menu.style.display = "none";
})