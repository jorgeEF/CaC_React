// operadores aritmeticos
console.log("suma de 2 + 2: ", 2+2);
console.log("resta de 4 - 1: ", 4-1);
console.log("multiplicacion de 4 x 5: ", 4*5);
console.log("division de 10 / 2: ", 10/2);
console.log("modulo de 10 / 2: ", 10%2)

// operadores comparativos
let nombre = "Juan";
console.log("Asignación: nombre = Juan da nombre: ", nombre);
console.log("Igual a: 1 == '1': ", 1=='1');
console.log("Igual igual a: 1 === '1': ", 1==='1');
console.log("Distinto a: 2 != 3: ", 2!=3);
console.log("2 < 3: ", 2<3);
console.log("2 > 3: ", 2>3);

// condicionales
let edad = 18;

if (edad>=18){
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad");
}

// condicional ternario
edad>=18?console.log("Es mayor de edad"):console.log("Es menor de edad");

// Funciones

// sin parametro
function Saludar(){
    console.log("Hola");
}
Saludar();

// con parametros
function SaludarA(nombre){
    console.log("Hola ", nombre);
}
SaludarA("Juan");

// Funcion flecha
let SaludarFlecha = (nombre) => {console.log("Hola ", nombre)};
SaludarFlecha("Juan Flecha");
