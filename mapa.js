const world = document.getElementById("world");

const escala = 1;

const worldWidth = 5367;
const worldHeight = 3022;

// Posición inicial (centro del mapa)
let x = (window.innerWidth - worldWidth) / 2;
let y = (window.innerHeight - worldHeight) / 2;

world.style.transform = `translate(${x}px, ${y}px)`;

let dragging = false;
let startX;
let startY;

// =====================
// DRAG
// =====================

world.addEventListener("mousedown", (e) => {

    dragging = true;

    startX = e.clientX - x;
    startY = e.clientY - y;

});

window.addEventListener("mouseup", () => {

    dragging = false;

});

window.addEventListener("mousemove", (e) => {

    if (!dragging) return;


    x = e.clientX - startX;
    y = e.clientY - startY;

const minX = window.innerWidth - worldWidth;
const minY = window.innerHeight - worldHeight;

    if (x > 0) x = 0;
    if (y > 0) y = 0;

    if (x < minX) x = minX;
    if (y < minY) y = minY;

    world.style.transform =
    `translate(${x}px, ${y}px)`;

});

// =====================
// SELECCIÓN DE ISLAS
// =====================

const islas = document.querySelectorAll(".isla");

const puntosCarmen = document.getElementById("puntosCarmen");

islas.forEach(isla => {

    isla.addEventListener("click", () => {

        // sacar selección
        islas.forEach(i => i.classList.remove("activa"));

        // ocultar todos los grupos de puntos
        document.querySelectorAll(".grupoPuntos").forEach(grupo => {

            grupo.classList.remove("visible");

        });

        // activar isla
        isla.classList.add("activa");

        // mostrar puntos según la isla
        if(isla.id === "isla2"){

            puntosCarmen.classList.add("visible");

        }

    });

});