// estructuras de control

// let numero = Number(prompt("Decime un número: "));

// While
/*
while(numero < 1000){    
    document.write(numero + "<br>")
    numero++;
} */

// do while
/* do {
    document.write(numero + "<br>")
    numero++;
} while(numero < 10); */

// For
/* 
let numero = 5;
for(let i = numero;i<10;i++){
    console.log(i)
} */

// Arreglos - Matrices
let frutas = ["Manzana","Banana","Pera","Tomate"];
let animales = ["Gato", "Perro", "Tigre", "Conejo", "Pez", "Rata", "tortuga", "Gato"];

// mostrar todos los elementos
console.log(frutas);
// mostrar solo 1 elemento de determinado indice
console.log(frutas[0]);

// métodos de arreglo

// arreglo.length: informa sobre longitud de arreglo
console.log(frutas.length);

// obtener ultimo elemento del arreglo
console.log(frutas[frutas.length-1]);

// Agregar o quitar elementos

// unshift(): agrega elemento al inicio de un arreglo
animales.unshift("Elefante");
console.log(animales);

// shift(): elimina primer elemento del arreglo
animales.shift();
console.log(animales);

// push(): Agregar elemento al final
animales.push("Coala");
console.log(animales);

// pop(): Quita último elemento
animales.pop();
console.log(animales);

// Slice(): obtiene un rango de un arreglo y lo guarda en otro
let animalesCortado = animales.slice(2,5);
console.log(animalesCortado);

// find(): Busca elemento en arreglo
let numeros = [1,2,8,7,4,6,5,9,3];
let numeroBuscado = numeros.find(elemento=>elemento==3);
console.log(numeroBuscado);

// foreach(): bucle por cada elemento del arreglo
numeros.forEach((elemento,i)=>{
    console.log(elemento)
});

// Filter(): filtrar elementos de un arreglo
let numerosFiltrados = numeros.filter(element=>element===8 || element===3);
console.log(numerosFiltrados);

// map(): recorre un arreglo y le aplica la operacion indicada a elementos
let numerosMapeados = numeros.map(elements=>elements*2);
console.log(numerosMapeados);

// spread operator(...): suma o concatena arreglos
let arreglosUnidos = [...animales,...numeros];
console.log(arreglosUnidos);