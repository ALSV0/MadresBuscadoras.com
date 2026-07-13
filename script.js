const boton = document.getElementById("buscar");

boton.addEventListener("click",()=>{

    boton.style.background="#ff4800";

    setTimeout(()=>{

        window.location.href="mapa.html";

    },300);

});