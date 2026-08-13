const node4 = document.getElementById("node4");
const node5 = document.getElementById("node5");

const linea45 = document.getElementById("linea45");
const linea54 = document.getElementById("linea54");
const scene = document.getElementById("scene");


const cartelSarda = document.getElementById("cartelSarda");

console.log("NODE4:", node4);
console.log("NODE5:", node5);
console.log("LINEA45:", linea45);
console.log("LINEA54:", linea54);


function conectar(origen, destino, linea) {

    const sceneRect = scene.getBoundingClientRect();

    const a = origen.getBoundingClientRect();
    const b = destino.getBoundingClientRect();

    const x1 =
        a.left - sceneRect.left + a.width / 2;

    const y1 =
        a.top - sceneRect.top + a.height / 2;

    const x2 =
        b.left - sceneRect.left + b.width / 2;

    const y2 =
        b.top - sceneRect.top + b.height / 2;

    linea.setAttribute("x1", x1);
    linea.setAttribute("y1", y1);

    linea.setAttribute("x2", x2);
    linea.setAttribute("y2", y2);
}

function posicionarCartelSarda() {

    const sceneRect = scene.getBoundingClientRect();

    const a = node4.getBoundingClientRect();
    const b = node5.getBoundingClientRect();

    const x =
        ((a.left + a.width / 2) +
        (b.left + b.width / 2)) / 2
        - sceneRect.left;

    const y =
        ((a.top + a.height / 2) +
        (b.top + b.height / 2)) / 2
        - sceneRect.top;

    cartelSarda.style.left = `${x}px`;
    cartelSarda.style.top = `${y}px`;
}

conectar(node4, node5, linea45);
conectar(node5, node4, linea54);

window.addEventListener("resize", () => {

    conectar(node4, node5, linea45);
    conectar(node5, node4, linea54);

    if (cartelSarda.classList.contains("activo")) {
        posicionarCartelSarda();
    }

});

window.addEventListener("scroll", () => {

    conectar(node4, node5, linea45);
    conectar(node5, node4, linea54);

});

node4.addEventListener("click", () => {

    linea54.classList.remove("activa");

    const activa = linea45.classList.toggle("activa");

    if (activa) {

        posicionarCartelSarda();
        cartelSarda.classList.add("activo");

    } else {

        cartelSarda.classList.remove("activo");

    }

});


node5.addEventListener("click", () => {

    linea45.classList.remove("activa");

    const activa = linea54.classList.toggle("activa");

    if (activa) {

        posicionarCartelSarda();
        cartelSarda.classList.add("activo");

    } else {

        cartelSarda.classList.remove("activo");

    }

});








window.addEventListener("load", () => {

    const transition = document.getElementById("transition");

    if (transition) {
        transition.classList.remove("activa");
    }

});