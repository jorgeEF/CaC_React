// interacciones

let nombre = prompt("Esto es un prompt(): ingresa tu nombre");

let confirmacion = confirm(`Esto es un confirm(), entendiste ${nombre} ?`)

if (confirmacion == true){
    alert ("Esto es un alert(): Me alegro hayas entendido")
}
else {
    alert ("Esto es un alert(): Lamento que no lo hayas entendido")
}
