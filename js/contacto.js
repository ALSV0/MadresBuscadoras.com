/* =========================================
   SUSCRIBIRSE
========================================= */

const botonSuscribirse = document.getElementById("suscribirse");
const panelSuscripcion = document.getElementById("panelSuscripcion");

botonSuscribirse.addEventListener("click", () => {

    const estaAbierto = panelSuscripcion.classList.contains("abierto");

    if (estaAbierto) {

        // Cerrar panel
        panelSuscripcion.classList.remove("abierto");

        botonSuscribirse.setAttribute("aria-expanded", "false");

        panelSuscripcion.setAttribute("aria-hidden", "true");

    } else {

        // Abrir panel
        panelSuscripcion.classList.add("abierto");

        botonSuscribirse.setAttribute("aria-expanded", "true");

        panelSuscripcion.setAttribute("aria-hidden", "false");

    }

});


/* =========================================
   MARCADOR DE UBICACIÓN
========================================= */

const ubicacion = document.querySelector(".ubicacion");

ubicacion.addEventListener("click", () => {

    // Detiene el pulso y agranda el marcador
    ubicacion.classList.add("seleccionado");

    // Abre Google Maps
    setTimeout(() => {

        window.location.href =
            "https://www.google.com/maps/search/?api=1&query=Juan+Bautista+Alberdi+4840%2C+Caseros%2C+Provincia+de+Buenos+Aires";

    }, 300);

});


/* =========================================
   FORMULARIO
========================================= */

const formulario = document.getElementById("formulario");
const botonEnviar = document.getElementById("enviar");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    botonEnviar.textContent = "ENVIADO";

    setTimeout(() => {

        botonEnviar.textContent = "ENVIAR";

        formulario.reset();

    }, 1800);

});