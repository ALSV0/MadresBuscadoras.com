/* =========================================
   CONTADOR 0 → 8
========================================= */

const contador =
    document.getElementById("contador");

let numero = 0;

const numeroFinal = 8;

const velocidad = 120;

const intervalo = setInterval(() => {

    numero++;

    contador.textContent = numero;

    if (numero >= numeroFinal) {

        clearInterval(intervalo);

    }

}, velocidad);


/* =========================================
   ESTABLECIMIENTOS
========================================= */

const establecimientos =
    document.querySelectorAll(".establecimiento");


/* =========================================
   CONFIGURACIÓN
========================================= */

const frenos = {

    1: 0.18,
    2: 0.32,
    3: 0.18,
    4: 0.58,
    5: 0.48,
    6: 0.68

};


/* =========================================
   MOVIMIENTO
========================================= */

function moverEstablecimientos() {

    establecimientos.forEach((establecimiento, index) => {

        const rect =
            establecimiento.getBoundingClientRect();

        const numero =
            index + 1;

        const posicionFreno =
            window.innerHeight * frenos[numero];


        /*
        El cartel todavía está entrando
        */

        if (rect.top > window.innerHeight * 0.95) {

            establecimiento.classList.remove("visible");

            return;

        }


        /*
        El cartel llegó a su punto de frenado
        */

        if (rect.top <= posicionFreno) {

            establecimiento.classList.add("visible");

            const diferencia =
                posicionFreno - rect.top;

            establecimiento.style.transform =
                `translateY(${diferencia}px) scale(1)`;

        }

        else {

            establecimiento.classList.add("visible");

            establecimiento.style.transform =
                `translateY(0) scale(1)`;

        }

    });

}


window.addEventListener(
    "scroll",
    moverEstablecimientos
);

window.addEventListener(
    "resize",
    moverEstablecimientos
);

moverEstablecimientos();