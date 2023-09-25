
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "null";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = null;

// Crea una variable booleana:
const nuevoBool = null;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = null * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null;



function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return str;
}
console.log("string devuelto: ", devolverString("Cadena de texto"));


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}
console.log("La suma de 20+17da: ", suma(20,17));

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return x - y;
}
console.log("La resta de 20-17 da: ", resta(20, 17))

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}
console.log("La multiplicacion 20*3 da: ", multiplica(20, 3))

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}
console.log("La divición 20/2 da: ", divide(20, 2));

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  if (x == y){
    return true;
  } else {
    return false;
  }
}
console.log("10 y 10 son iguales? ", sonIguales(10,10));

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length == str2.length
}
console.log("Hola y Taco tienen la misma longitud? ", tienenMismaLongitud("Hola","Taco"))

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num < 90;
}
console.log("50 es menor que 90? ", menosQueNoventa(50));

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50
}
console.log("40 es mayor que 50? ", mayorQueCincuenta(40));

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
console.log("El resto de 15/2 es: ", obtenerResto(15, 2))

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return (num % 2) == 0;
}
console.log("16 es Par? ", esPar(16));

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return (num % 2) != 0;
}
console.log("16 es Impar? ", esImpar(16));

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return num**2
}
console.log("2 al cuadrado es: ", elevarAlCuadrado(2));

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num**3
}
console.log("2 al cubo es: ", elevarAlCubo(2));

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num,exponent);
}
console.log("2 a la potencia de 6 es: ", elevar(2, 6));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num)
}
console.log("4.2 redondeado es: ", redondearNumero(4.2));

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)
}
console.log("5.2 redondeado hacia arriba es: ", redondearHaciaArriba(5.2));

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}
console.log("numero aleatorio: ", numeroRandom());

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0){
    return "Es positivo"
  } else if (numero < 0){
    return "Es negativo"
  } else {
    return false;
  }
}
console.log("Es positivo 5?", esPositivo(5));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!";
}
console.log("Agregar ! a Hola Mundo: ", agregarSimboloExclamacion("Hola Mundo"));

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return nombre+" "+apellido;
}
console.log("Combinar nombre y apellido Juan + Perez: ", combinarNombres("Juan", "Perez"));

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre
}
console.log("Saludar a Martin: ", obtenerSaludo("Martin"));

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto*ancho;
}
console.log("El area de un rectangulo de 5x3 es: ", obtenerAreaRectangulo(5,3));

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado*4
}
console.log("el perímetro de un cuadrado de 7x7 es: ", retornarPerimetro(7));

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base*altura) / 2;
}
console.log("el area de un triangulo de 3 x 5 es: ", areaDelTriangulo(3,5));

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro*1.20;
}
console.log("20 euros son dolares: ", deEuroAdolar(20));


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  if (letra.length<2){
    switch (letra.toLowerCase()){
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return "Es Vocal";
        break;
      default:
        return "ingresó una consonante"
        break;
    }
  } else {
    return "Dato incorrecto";
  }
}
console.log("Es Vocal la R? ", esVocal("R"));
