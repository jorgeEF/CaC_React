// variables a partir de elementos del html

// let sonidoBarman = document.getElementsByClassName("bati_encendido")
let sonidoBatman = document.querySelector(".bati_encendido")
let sonidoBoton = document.querySelector(".bati_click")

let batman = document.querySelector(".batman")
let batmanBoton = document.querySelector(".bati_boton")

let estadoLinterna = "apagado"

// funciones

function controlarLinterna() {
    if (estadoLinterna === "apagado") {
        estadoLinterna = "encendido";
        sonidoLinterna();
        batman.classList.add("batman_activo");
    } else {
        estadoLinterna = "apagado";
        sonidoLinterna();
        batman.classList.remove("batman_activo");
    }
}

function sonidoLinterna(){
    if (sonidoBatman.paused) {
        sonidoBoton.play();
        sonidoBatman.play();
    } else {
        sonidoBoton.play();
        sonidoBatman.pause();
    }
}

// event listener

batmanBoton.addEventListener("click", controlarLinterna);


