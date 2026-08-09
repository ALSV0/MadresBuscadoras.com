const node4 = document.getElementById("node4");
const node5 = document.getElementById("node5");

const linea45 = document.getElementById("linea45");
const linea54 = document.getElementById("linea54");
const scene = document.getElementById("scene");

function conectar(origen, destino, linea){

    const sceneRect = scene.getBoundingClientRect();

    const a = origen.getBoundingClientRect();
    const b = destino.getBoundingClientRect();

    linea.setAttribute("x1", a.left - sceneRect.left + a.width / 2);
    linea.setAttribute("y1", a.top - sceneRect.top + a.height / 2);

    linea.setAttribute("x2", b.left - sceneRect.left + b.width / 2);
    linea.setAttribute("y2", b.top - sceneRect.top + b.height / 2);

}

conectar(node4, node5, linea45);
conectar(node5, node4, linea54);

window.addEventListener("resize", () => {

    conectar(node4, node5, linea45);
    conectar(node5, node4, linea54);

});

window.addEventListener("scroll", () => {

    conectar(node4, node5, linea45);
    conectar(node5, node4, linea54);

});

node4.addEventListener("click", () => {

    linea54.classList.remove("activa");
    linea45.classList.toggle("activa");

});

node5.addEventListener("click", () => {

    linea45.classList.remove("activa");
    linea54.classList.toggle("activa");

});









window.addEventListener("load", () => {

    const transition = document.getElementById("transition");

    if (transition) {
        transition.classList.remove("activa");
    }

});