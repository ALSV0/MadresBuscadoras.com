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