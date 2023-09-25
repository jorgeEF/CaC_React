// API key: ff34c0fd786487dd1849c865d642e2e8
// url con api: https://api.themoviedb.org/3/movie/popular?api_key=ff34c0fd786487dd1849c865d642e2e8&language=es-MX&page=1

// variable para controlar la paginación
let pagina = 1;

// capturar botones

let btnAnterior = document.querySelector(".btnAnterior");
let btnSiguiente = document.querySelector(".btnSiguiente");
let contenedor = document.querySelector("contenedor");

// funcion bntAnterior
btnAnterior.addEventListener("click", ()=>{
    if (pagina > 1) {
        pagina -= 1;
        // pagina = pagina - 1

        //funcion que carga las peliculas
        cargarPeliculas();
    }
});

// funcion btnSiguiente
btnSiguiente.addEventListener("click", ()=>{
    if (pagina < 500 ) {
        pagina += 1;
        // pagina = pagina + 1

        //funcion que carga las peliculas
        cargarPeliculas();
    }
});

// funcion que carga y muestra las peliculas
const cargarPeliculas = async () => {
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ff34c0fd786487dd1849c865d642e2e8&language=es-MX&page=${pagina}`);    
        //console.log(respuesta);
        if (respuesta.status == 200) {
            let datos = await respuesta.json()
            //console.log(datos);
            
            let peliculas = "";

            datos.results.forEach((pelicula=>{
                peliculas+=`<div class="pelicula">
                <img class="poster" src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
                <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `;                  
            })
            );
            document.querySelector(".contenedor").innerHTML=peliculas;     
        }
        else if (respuesta.status===404){
            console.log("error 404")
        }
    }        
    catch (error) {
        console.log(error);
    }    
}

window.addEventListener("load", cargarPeliculas);