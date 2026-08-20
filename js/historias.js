const fondo = document.querySelector(".fondo");
const planoNegro = document.querySelector(".plano-negro");

const madres = [
    document.querySelector(".madre1"),
    document.querySelector(".madre2"),
    document.querySelector(".madre3"),
    document.querySelector(".madre4"),
    document.querySelector(".madre5"),
    document.querySelector(".madre6"),
    document.querySelector(".madre7")
];


// =====================================
// CONFIGURACIÓN
// =====================================

const inicioMadres = 420;

const separacion = 500;

const recorridoEntrada = 350;


// =====================================
// SCROLL
// =====================================

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;


    // =====================================
    // FASE 1
    // =====================================

    if (scroll <= 320) {

        fondo.style.transform =
            "translateY(0px)";

        planoNegro.style.transform =
            `translateY(-${scroll}px)`;

    }


    // =====================================
    // FASE 2
    // =====================================

    else if (scroll <= 420) {

        const movimiento = scroll - 320;

        fondo.style.transform =
            `translateY(-${movimiento}px)`;

        planoNegro.style.transform =
            `translateY(-${320 + movimiento}px)`;

    }


    // =====================================
    // FASE 3
    // =====================================

    else {

        const movimiento = scroll - 420;

        fondo.style.transform =
            `translateY(-${100 + movimiento}px)`;

        planoNegro.style.transform =
            `translateY(-${420 + movimiento}px)`;

    }


/// =================================
// FUNCIÓN PARA CADA MADRE
// =================================

function animarMadre(madre, inicio, cubre, posicionInicial, posicionFrase) {

    if (scroll < inicio) {

        // Todavía no aparece
        madre.style.transform =
            `translateY(${posicionInicial}px)`;

    }

    else if (scroll < cubre) {

        // Está entrando suavemente
        const progreso =
            (scroll - inicio) /
            (cubre - inicio);

        const suavizado =
            progreso * progreso *
            (3 - 2 * progreso);

        const posicion =
            posicionInicial +
            (posicionFrase - posicionInicial) *
            suavizado;

        madre.style.transform =
            `translateY(${posicion}px)`;

    }

    else {

        // Ya tapó la frase y continúa subiendo
        const salida =
            scroll - cubre;

        madre.style.transform =
            `translateY(${posicionFrase - salida}px)`;

    }
}

// =================================
// MADRES
// =================================

animarMadre(
    madres[0],
    180,
    500,
    250,
    -400
);

animarMadre(
    madres[1],
    180,
    500,
    200,
    -400
);

animarMadre(madres[2], 700, 1120, 200, -1000);

animarMadre(
    madres[3],
    700,
    1170,
    200,
    -1050
);

animarMadre(
    madres[4],
    1000,
    1720,
    200,
    -1600
);

animarMadre(
    madres[5],
    1300,
    2020,
    200,
    -1900
);

animarMadre(
    madres[6],
    1500,
    2220,
    200,
    -2200
);

});


// Ejecutar la animación una vez al cargar la página
window.dispatchEvent(new Event("scroll"));


