/* =========================
   ELEMENTOS
========================= */

const años = document.querySelectorAll(".año");

const anterior = document.getElementById("anterior");

const siguiente = document.getElementById("siguiente");

const contenedor = document.getElementById("años");

const timeline = document.querySelector(".timeline");

const nombresMadres =
    document.getElementById("nombresMadres");


let posicion = 0;

let añoActivo = null;


/* =========================
   MADRES POR FECHA
========================= */

const madres = {

    "1968": [
        {
            nombre: "MARTA PEREZ",
            ficha: "marta-perez.html"
        }
    ],

    "1969": [
        {
            nombre: "LEONOR LAZZARENO",
            ficha: "leonor-lazzareno.html"
        }
    ],

    "1972": [
        {
            nombre: "CARMEN MIRANDA",
            ficha: "carmen-miranda.html"
        },
        {
            nombre: "BIBIANA YULI",
            ficha: "bibiana-yuli.html"
        }
    ],

    "1978": [
        {
            nombre: "ESTER HUBLICH",
            ficha: "ester-hublich.html"
        }
    ],

    "1983": [
        {
            nombre: "ALICIA PREDAZZI",
            ficha: "alicia-predazzi.html"
        }
    ],

    "1995": [
        {
            nombre: "STELLA MARIS CERATI",
            ficha: "../casos/stella-cerati.html"
        }
    ]

};


/* =========================
   MOSTRAR MADRES
========================= */

function mostrarMadres(fecha, año) {

    nombresMadres.innerHTML = "";

    const lista = madres[fecha];

    if (!lista) {
        return;
    }


    /* =========================
       CREAR NOMBRES
    ========================= */

    lista.forEach((madre) => {

        const enlace =
            document.createElement("a");

        enlace.classList.add("nombre-madre");

        enlace.textContent =
            madre.nombre;

        enlace.href =
            madre.ficha;

        nombresMadres.appendChild(enlace);

    });


    /* =========================
       POSICIONAR NOMBRES
       EN EL BORDE IZQUIERDO
       DEL AÑO
    ========================= */

    requestAnimationFrame(() => {

        const rectAño =
            año.getBoundingClientRect();

        const rectTimeline =
            timeline.getBoundingClientRect();


        /*
        Tomamos el BORDE IZQUIERDO
        del año, no el centro.
        */

        const posicionX =
            rectAño.left -
            rectTimeline.left;


        nombresMadres.style.left =
            `${posicionX}px`;


        /*
        MUY IMPORTANTE:
        NO centramos el contenedor.
        */

        nombresMadres.style.transform =
            "none";

    });

}


/* =========================
   OCULTAR MADRES
========================= */

function ocultarMadres() {

    nombresMadres.innerHTML = "";

}


/* =========================
   HOVER DE LOS AÑOS
========================= */

años.forEach((año) => {

    año.addEventListener("mouseenter", () => {

        añoActivo = año;

        año.classList.add("activo");

        mostrarMadres(
            año.dataset.fecha,
            año
        );

    });


    año.addEventListener("mouseleave", () => {

        /*
        Damos un pequeño tiempo para
        que el cursor pueda ir desde
        el año hasta el nombre.
        */

        setTimeout(() => {

            if (
                !año.matches(":hover") &&
                !nombresMadres.matches(":hover")
            ) {

                año.classList.remove("activo");

                añoActivo = null;

                ocultarMadres();

            }

        }, 150);

    });

});


/* =========================
   MANTENER AÑO GRANDE
   AL PASAR AL NOMBRE
========================= */

nombresMadres.addEventListener(
    "mouseenter",
    () => {

        if (añoActivo) {

            añoActivo.classList.add("activo");

        }

    }
);


nombresMadres.addEventListener(
    "mouseleave",
    () => {

        if (añoActivo) {

            añoActivo.classList.remove("activo");

        }

        añoActivo = null;

        ocultarMadres();

    }
);


/* =========================
   ACTUALIZAR FLECHAS
========================= */

function actualizarFlechas() {

    /*
    La flecha izquierda siempre aparece.
    */

    if (posicion === 0) {

        anterior.style.opacity = "0.35";

    } else {

        anterior.style.opacity = "1";

    }


    /*
    La derecha también permanece visible.
    */

    if (
        posicion === años.length - 1
    ) {

        siguiente.style.opacity = "0.35";

    } else {

        siguiente.style.opacity = "1";

    }

}


/* =========================
   MOVER AÑOS
========================= */

function mover() {

    const añoActual =
        años[posicion];


    /*
    Posición real del año
    dentro de la fila.
    */

    const posicionAño =
        añoActual.offsetLeft;


    /*
    Ancho total de todos
    los años.
    */

    const anchoTotal =
        contenedor.scrollWidth;


    /*
    Ancho visible de la pantalla.
    */

    const anchoVisible =
        timeline.clientWidth;


    /*
    Máximo desplazamiento
    permitido.
    */

    const desplazamientoMaximo =
        Math.max(
            0,
            anchoTotal -
            anchoVisible
        );


    let desplazamiento =
        posicionAño;


    if (
        desplazamiento >
        desplazamientoMaximo
    ) {

        desplazamiento =
            desplazamientoMaximo;

    }


    if (desplazamiento < 0) {

        desplazamiento = 0;

    }


    /*
    MOVEMOS LOS AÑOS
    */

    contenedor.style.transform =
        `translateX(-${desplazamiento}px)`;


    actualizarFlechas();

}


/* =========================
   FLECHA DERECHA
========================= */

siguiente.addEventListener(
    "click",
    () => {

        if (
            posicion <
            años.length - 1
        ) {

            posicion++;

            mover();

        }

    }
);


/* =========================
   FLECHA IZQUIERDA
========================= */

anterior.addEventListener(
    "click",
    () => {

        if (posicion > 0) {

            posicion--;

            mover();

        }

    }
);


/* =========================
   INICIO
========================= */

actualizarFlechas();