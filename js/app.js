const fecha = document.getElementById("txtFecha");
const hospital = document.getElementById("txtHospital");
const historias = document.querySelector(".btn-historias");
const inicio = document.querySelector("#inicio");
const rectangulo = document.querySelector("#rectangulo");


window.addEventListener("scroll", function () {

    const scroll = window.scrollY;

    console.log("Scroll:", scroll);


    // FECHAS
    if (scroll > 100) {
        fecha.classList.add("visible");
    }


    // +
    if (scroll > 350) {
        hospital.classList.add("visible");
    }


    // HISTORIAS
    if (scroll > 600) {
        historias.classList.add("visible");
        inicio.classList.add("visible");
        rectangulo.classList.add("visible");
    }


    // --------------------------------
    // MOVIMIENTO DEL RECTÁNGULO
    // --------------------------------

    if (scroll > 600) {

        // Cuánto sube el rectángulo
        let movimiento = (scroll - 600) * 0.5;

        // Limita el movimiento máximo
        movimiento = Math.min(movimiento, 300);

        rectangulo.style.transform =
            `translateY(-${movimiento}px)`;

    }

});


const hospitalImg = document.querySelector("#txtHospital img");

hospitalImg.addEventListener("mouseenter", () => {
    hospitalImg.src = hospitalImg.dataset.hover;
});

hospitalImg.addEventListener("mouseleave", () => {
    hospitalImg.src = hospitalImg.dataset.normal;
});


const historiasImg = document.querySelector(".btn-historias img");

historiasImg.addEventListener("mouseenter", () => {
    historiasImg.src = historiasImg.dataset.hover;
});

historiasImg.addEventListener("mouseleave", () => {
    historiasImg.src = historiasImg.dataset.normal;
});