// Interacciones con variables

let nombre = prompt("Por favor, ingresa tu nombre:");

let confirmacion = confirm(`Ingresaste ${nombre}, continuar?`);

if (confirmacion == true){
    alert ("Bienvenido");
    // mostrar variable en el front
    document.write(`Hola ${nombre}`);
}
else {
    alert ("La próxima ingresa bien tu nombre");
    document.write(`Recarga la pagina para llenar el formulario de nuevo`);
}