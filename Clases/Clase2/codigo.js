// Interacciones con variables

let nombre = prompt("Por favor, ingresa tu nombre:");

let confirmacion = confirm(`Ingresaste ${nombre}, continuar?`);

if (confirmacion == true){
    alert ("Bienvenido");
}
else {
    alert ("La próxima ingresa bien tu nombre");
}

// mostrar variable en el front
document.write(`Hola ${nombre}`);