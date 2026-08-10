console.log("JS cargado");

const playBtn = document.getElementById("playVideo");
const video = document.getElementById("videoStella");
const preview = document.querySelector(".video-preview");
const cerrar = document.getElementById("cerrarVideo");
const fondoOscuro = document.getElementById("overlayVideo");

console.log(playBtn);



const slides = document.querySelectorAll(".slide");

const cuadrados = document.querySelectorAll(".cuadrado");

const flechaDerecha = document.querySelector(".flecha.derecha");

const flechaIzquierda = document.querySelector(".flecha.izquierda");

let indice = 0;

function actualizarVista(){

    // Slides
    slides.forEach(slide=>{
        slide.classList.remove("activo");
    });

    slides[indice].classList.add("activo");

    // Cuadrados
    cuadrados.forEach(c=>{
        c.classList.remove("activo");
    });

    cuadrados[indice].classList.add("activo");


    // Flecha izquierda
    if(indice === 0){

        flechaIzquierda.style.opacity = "0";
        flechaIzquierda.style.pointerEvents = "none";

    }else{

        flechaIzquierda.style.opacity = "1";
        flechaIzquierda.style.pointerEvents = "auto";

    }


    // Flecha derecha
    if(indice === slides.length-1){

        flechaDerecha.style.opacity = "0";
        flechaDerecha.style.pointerEvents = "none";

    }else{

        flechaDerecha.style.opacity = "1";
        flechaDerecha.style.pointerEvents = "auto";

    }

}

flechaDerecha.addEventListener("click",()=>{

    console.log("CLICK FLECHA");

    if(indice<slides.length-1){

        indice++;

        console.log(indice);

        actualizarVista();

    }

});

flechaIzquierda.addEventListener("click",()=>{

    if(indice>0){

        indice--;

        actualizarVista();

    }

});







playBtn.addEventListener("click", () => {

    preview.style.display = "none";

    playBtn.style.display = "none";

    video.style.display = "block";

    cerrar.style.display = "block";

fondoOscuro.classList.add("activo");

video.controls = true;

    video.play();

});

cerrar.addEventListener("click", () => {

    video.pause();

    video.currentTime = 0;

    video.controls = false;

    video.style.display = "none";

    preview.style.display = "block";

    playBtn.style.display = "block";

    cerrar.style.display = "none";

fondoOscuro.classList.remove("activo");

});


// =========================
// VISOR DE GALERÍA
// =========================

const fotosGaleria = document.querySelectorAll(".foto-galeria");

const visorGaleria = document.getElementById("visorGaleria");
const imagenGaleria = document.getElementById("imagenGaleria");
const cerrarGaleria = document.getElementById("cerrarGaleria");

fotosGaleria.forEach(foto => {

    foto.addEventListener("click", () => {

        const imagenColor = foto.querySelector(".foto-color");

        imagenGaleria.src = imagenColor.src;

        visorGaleria.classList.add("activo");

    });

});

cerrarGaleria.addEventListener("click", () => {

    visorGaleria.classList.remove("activo");

});

visorGaleria.addEventListener("click", (e) => {

    if (e.target === visorGaleria) {

        visorGaleria.classList.remove("activo");

    }

});

console.log("GALERIA JS CARGADO");
console.log("Fotos encontradas:", fotosGaleria.length);

// =========================
// ZOOM DE GALERÍA
// =========================

let zoomGaleria = 1;
let posX = 0;
let posY = 0;

imagenGaleria.addEventListener("wheel", (e) => {

    e.preventDefault();

    if (e.deltaY < 0) {
        zoomGaleria += 0.1;
    } else {
        zoomGaleria -= 0.1;
    }

    // Límites del zoom
    zoomGaleria = Math.min(Math.max(zoomGaleria, 1), 3);

    actualizarZoom();

});


function actualizarZoom() {

    imagenGaleria.style.transform =
        `translate(${posX}px, ${posY}px) scale(${zoomGaleria})`;

}

let arrastrando = false;
let inicioX = 0;
let inicioY = 0;

imagenGaleria.addEventListener("mousedown", (e) => {

    if (zoomGaleria <= 1) return;

    arrastrando = true;

    inicioX = e.clientX - posX;
    inicioY = e.clientY - posY;

    imagenGaleria.style.cursor = "grabbing";

});


document.addEventListener("mousemove", (e) => {

    if (!arrastrando) return;

    posX = e.clientX - inicioX;
    posY = e.clientY - inicioY;

    actualizarZoom();

});


document.addEventListener("mouseup", () => {

    arrastrando = false;

    imagenGaleria.style.cursor = "grab";

});



// =========================
// VISOR DE CARTA
// =========================

const verCarta = document.getElementById("verCarta");
const visorCarta = document.getElementById("visorCarta");
const cerrarCarta = document.getElementById("cerrarCarta");

if (verCarta && visorCarta && cerrarCarta) {

    verCarta.addEventListener("click", () => {

        visorCarta.classList.add("activo");

    });


    cerrarCarta.addEventListener("click", () => {

        visorCarta.classList.remove("activo");

    });


    // Cerrar haciendo click fuera de la carta
    visorCarta.addEventListener("click", (e) => {

        if (e.target === visorCarta) {

            visorCarta.classList.remove("activo");

        }

    });

}

console.log("VER CARTA:", verCarta);
console.log("VISOR CARTA:", visorCarta);
console.log("CERRAR CARTA:", cerrarCarta);







// =========================
// CARRUSEL DE FOTOS DE LA CARTA
// =========================

const fotosCarta = document.querySelectorAll(".foto-carta");

let fotoCentral = 0;

let zoomCarta = 1;


function actualizarCarrusel() {

    fotosCarta.forEach((foto, index) => {

        foto.classList.remove(
            "centro",
            "izquierda",
            "derecha",
            "atras"
        );

        let posicion = (index - fotoCentral + fotosCarta.length)
            % fotosCarta.length;


        // FOTO CENTRAL
        if (posicion === 0) {

            foto.classList.add("centro");

        }


        // FOTO DE LA DERECHA
        else if (posicion === 1) {

            foto.classList.add("derecha");

        }


        // FOTO DE ATRÁS
        else if (posicion === 2) {

            foto.classList.add("atras");

        }


        // FOTO DE LA IZQUIERDA
        else if (posicion === 3) {

            foto.classList.add("izquierda");

        }

    });

}


// Al hacer click en cualquier foto

fotosCarta.forEach((foto, index) => {

    foto.addEventListener("click", () => {

        fotoCentral = index;

        actualizarCarrusel();

    });

});


// Estado inicial

actualizarCarrusel();








// =========================
// ZOOM DE LA CARTA
// =========================

const MIN_ZOOM_CARTA = 1;
const MAX_ZOOM_CARTA = 2.5;
const PASO_ZOOM_CARTA = 0.15;


function actualizarZoomCarta() {

    const cartaCentro = document.querySelector(".foto-carta.centro");

    if (!cartaCentro) return;

    const imagen = cartaCentro.querySelector(".foto-carta-color");

    if (!imagen) return;

    imagen.style.transform =
        `translate(${posicionXCarta}px, ${posicionYCarta}px) scale(${zoomCarta})`;
}


// Ruedita del mouse
document.addEventListener("wheel", (e) => {

    const cartaCentro = document.querySelector(".foto-carta.centro");

    if (!cartaCentro) return;

    // Solo hacer zoom si estamos sobre la foto central
    if (!cartaCentro.contains(e.target)) return;

    e.preventDefault();

    if (e.deltaY < 0) {

        zoomCarta += PASO_ZOOM_CARTA;

    } else {

        zoomCarta -= PASO_ZOOM_CARTA;

    }

    zoomCarta = Math.max(
        MIN_ZOOM_CARTA,
        Math.min(MAX_ZOOM_CARTA, zoomCarta)
    );

    actualizarZoomCarta();

}, { passive: false });



// =========================
// ARRASTRE DE LA CARTA
// =========================

let arrastrandoCarta = false;

let inicioXCarta = 0;
let inicioYCarta = 0;

let posicionXCarta = 0;
let posicionYCarta = 0;


// INICIAR ARRASTRE
document.addEventListener("mousedown", (e) => {

    const cartaCentro = document.querySelector(".foto-carta.centro");

    if (!cartaCentro) return;

    // Solo arrastrar la foto central
    if (!cartaCentro.contains(e.target)) return;

    // Sin zoom no se puede arrastrar
    if (zoomCarta <= 1) return;

    arrastrandoCarta = true;

    inicioXCarta = e.clientX - posicionXCarta;
    inicioYCarta = e.clientY - posicionYCarta;

    e.preventDefault();

});


// MOVER
document.addEventListener("mousemove", (e) => {

    if (!arrastrandoCarta) return;

    const cartaCentro = document.querySelector(".foto-carta.centro");

    if (!cartaCentro) return;

    const imagen = cartaCentro.querySelector(".foto-carta-color");

    if (!imagen) return;

    posicionXCarta = e.clientX - inicioXCarta;
    posicionYCarta = e.clientY - inicioYCarta;

    imagen.style.transform =
        `translate(${posicionXCarta}px, ${posicionYCarta}px) scale(${zoomCarta})`;

});


// SOLTAR
document.addEventListener("mouseup", () => {

    arrastrandoCarta = false;

});