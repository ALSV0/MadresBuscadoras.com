const menu = document.getElementById("btnMenu");
const overlay = document.getElementById("overlay");
const panel = document.getElementById("menuPanel");

menu.addEventListener("click", () => {

    menu.classList.toggle("abierto");
    overlay.classList.toggle("abierto");
    panel.classList.toggle("abierto");

});

overlay.addEventListener("click", () => {

    menu.classList.remove("abierto");
    overlay.classList.remove("abierto");
    panel.classList.remove("abierto");

});