// objetos
const vehiculo = {
    marca: "",
    modelo: "",
    color: ""
}

vehiculo.marca = "vw";
console.log(vehiculo.marca);

// metodos en objetos

const celular = {
    marca: "Apple",
    precio: 1000,
    modelo: 11,
    stock: 10,
    encender: function(){
        console.log(`celular ${this.marca} ${this.modelo} encendido`);
    }

}

celular.encender()

//notación de puntos console.log(celular.marca);
// notación de corchetes console.log(celular["marca"]);

// spread operator (Objetos)

let generoAccion = {
    nombreGenero: "Acción",
    ranking: 1,

}

let duroMatar={
    titulo:"rambo",
    popularidad:10,
    ...generoAccion
}
console.log(duroMatar);

// destructuración
let seleccion = ["Messi", "De Paul", "Martinez"]

// copiando datos SIN DESTRUCTURING
let dibu2 = seleccion[2]
console.log(dibu2);

//copiando datos con DESTRUCTURING
let [leo,rodrigo,dibu] = seleccion //guarda en 3 variables
console.log(rodrigo);