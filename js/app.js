// ==========================
// NODOS
// ==========================

const fecha = document.getElementById("fecha");
const documentos = document.getElementById("documentos");
const video = document.getElementById("video");
const fotos = document.getElementById("fotos");
const hospital = document.getElementById("hospital");

// ==========================
// LINEAS
// ==========================

const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");


// ==========================
// DIBUJAR LINEAS
// ==========================

function conectar(origen, destino, linea){

    const svg = document.getElementById("connections");

    const svgRect = svg.getBoundingClientRect();

    const a = origen.getBoundingClientRect();
    const b = destino.getBoundingClientRect();

    const x1 = a.left + a.width/2 - svgRect.left;
    const y1 = a.top + a.height/2 - svgRect.top;

    const x2 = b.left + b.width/2 - svgRect.left;
    const y2 = b.top + b.height/2 - svgRect.top;

    linea.setAttribute("x1", x1);
    linea.setAttribute("y1", y1);

    linea.setAttribute("x2", x2);
    linea.setAttribute("y2", y2);

}


// ==========================
// ACTUALIZAR TODAS
// ==========================

function actualizarLineas(){

    conectar(fecha, documentos, l1);
    conectar(documentos, video, l2);
    conectar(video, fotos, l3);
    conectar(fotos, hospital, l4);

}


// ==========================
// CUANDO CARGA
// ==========================

window.addEventListener("load", actualizarLineas);


// ==========================
// CUANDO CAMBIA EL TAMAÑO
// ==========================

window.addEventListener("resize", actualizarLineas);


// ==========================
// INTERACCIONES
// ==========================

fecha.addEventListener("click", () => {

    fecha.classList.remove("activo");

    l1.classList.add("activa");

    setTimeout(()=>{

        documentos.classList.add("visible");
        documentos.classList.add("activo");

        document
            .getElementById("txtFecha")
            .classList.add("visible");

    },100);

});

documentos.addEventListener("click", () => {

    documentos.classList.remove("activo");

    l2.classList.add("activa");

    setTimeout(() => {

        video.classList.add("visible");
        video.classList.add("activo");

        document
            .getElementById("txtDocumento")
            .classList.add("visible");

    },100);

});

video.addEventListener("click", () => {

    video.classList.remove("activo");

    l3.classList.add("activa");

    setTimeout(() => {

        fotos.classList.add("visible");
        fotos.classList.add("activo");

        document
            .getElementById("txtVideo")
            .classList.add("visible");

    },100);

});

fotos.addEventListener("click", () => {

    fotos.classList.remove("activo");

    l4.classList.add("activa");

    setTimeout(() => {

        hospital.classList.add("visible");
        hospital.classList.add("activo");

        document
            .getElementById("txtFotos")
            .classList.add("visible");

    },100);

});

hospital.addEventListener("click", () => {

    hospital.classList.remove("activo");

    document
        .getElementById("txtHospital")
        .classList.add("visible");

});



