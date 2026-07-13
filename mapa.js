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

window.addEventListener("mouseleave", () => {

    dragging = false;

});

window.addEventListener("blur", () => {

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
const tarjetaCarmen = document.getElementById("tarjetaCarmen");

islas.forEach(isla => {

    isla.addEventListener("click",()=>{

        // quitar selección
        islas.forEach(i=>i.classList.remove("activa"));

        // ocultar todos los grupos de puntos
        document.querySelectorAll(".grupoPuntos").forEach(g=>{

            g.classList.remove("visible");

        });

        // ocultar todas las tarjetas
        document.querySelectorAll(".tarjetaMadre").forEach(t=>{

            t.classList.remove("visible");

        });

        // activar madre
        isla.classList.add("activa");

        // Carmen
        if(isla.id==="isla2"){

            puntosCarmen.classList.add("visible");
            tarjetaCarmen.classList.add("visible");

        }

    });

});

const hotspotVideo = document.getElementById("hotspotVideo");
const videoCarmen = document.getElementById("videoCarmen");

hotspotVideo.addEventListener("click", () => {

    hotspotVideo.classList.toggle("activo");

    videoCarmen.classList.toggle("visible");

});

const hotspotFecha = document.getElementById("hotspotFecha");
const fechaCarmen = document.getElementById("fechaCarmen");

hotspotFecha.addEventListener("click",()=>{

    hotspotFecha.classList.toggle("activo");

    fechaCarmen.classList.toggle("visible");

    overlay.classList.add("visible");

    dragging = false;

    world.style.transition = "transform 1.8s ease-in-out";

// posición donde querés que quede la ficha
x = -2300;
y = -1450;

world.style.transform = `translate(${x}px, ${y}px)`;

    caminoFecha.style.transition =
        "stroke-dashoffset 1.8s ease";

    caminoFecha.style.strokeDashoffset = 0;

    setTimeout(()=>{

        fichaFecha.classList.add("visible");

    },1800);

});

const hotspotCarta = document.getElementById("hotspotCarta");
const cartaCarmen = document.getElementById("cartaCarmen");

hotspotCarta.addEventListener("click",()=>{

    hotspotCarta.classList.toggle("activo");
    cartaCarmen.classList.toggle("visible");

});

const hotspotDocumento = document.getElementById("hotspotDocumento");
const documentoCarmen = document.getElementById("documentoCarmen");

hotspotDocumento.addEventListener("click",()=>{

    hotspotDocumento.classList.toggle("activo");
    documentoCarmen.classList.toggle("visible");

});

//=====================================
// FICHA FECHA
//=====================================


const overlay = document.getElementById("overlay");

const fichaFecha = document.getElementById("fichaFecha");

const cerrarFicha = document.getElementById("cerrarFicha");

const caminoFecha = document.getElementById("caminoFecha");


// longitud total del recorrido

const largo = caminoFecha.getTotalLength();

caminoFecha.style.strokeDasharray = largo;
caminoFecha.style.strokeDashoffset = largo;



cerrarFicha.addEventListener("click",()=>{

    fichaFecha.classList.remove("visible");

    caminoFecha.style.transition =
        "stroke-dashoffset 1.2s ease";

    caminoFecha.style.strokeDashoffset = largo;

    overlay.classList.remove("visible");


dragging = false;

world.style.transition = "transform 1.4s ease";

x = (window.innerWidth - worldWidth) / 2;
y = (window.innerHeight - worldHeight) / 2;

world.style.transform = `translate(${x}px, ${y}px)`;

setTimeout(()=>{

    world.style.transition = "";

},1400);


});
