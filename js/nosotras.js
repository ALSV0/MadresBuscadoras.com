/* =========================================
   BOTÓN VER EQUIPO
========================================= */

const botonEquipo = document.getElementById("botonEquipo");
const integrantes = document.querySelector(".integrantes");
const flechaEquipo = document.querySelector(".flecha");

botonEquipo.addEventListener("click", () => {

    integrantes.classList.toggle("oculto");

    flechaEquipo.style.transform =
        integrantes.classList.contains("oculto")
            ? "rotate(-90deg)"
            : "rotate(0deg)";
});


/* =========================================
   ARRASTRE DE "QUIENES SOMOS"
   CUANDO SUBE LA PANTALLA ROJA
========================================= */

const pantallaQuienes = document.querySelector(".pantalla-quienes");
const contenidoQuienes = document.querySelector(".contenido-quienes");
const pantallaEquipo = document.querySelector(".pantalla-equipo");

let inicioEquipo = 0;

function calcularInicio() {

    inicioEquipo =
        pantallaEquipo.getBoundingClientRect().top +
        window.scrollY;

}

calcularInicio();

window.addEventListener("resize", calcularInicio);


window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    /*
        Punto en el que empieza a subir
        la pantalla roja.
    */

    const inicio = inicioEquipo - window.innerHeight;

    /*
        Distancia durante la cual
        arrastramos QUIENES SOMOS.
    */

    const recorrido = window.innerHeight * 0.75;

    let progreso =
        (scroll - inicio) / recorrido;

    /*
        Limitamos el valor entre 0 y 1
    */

    progreso = Math.max(0, Math.min(1, progreso));


    /*
        Movimiento vertical.
        
        Empieza en 0
        y termina aproximadamente 500px arriba.
    */


    const movimiento = progreso * -270;


    contenidoQuienes.style.transform =
        `translateY(${movimiento}px)`;

});