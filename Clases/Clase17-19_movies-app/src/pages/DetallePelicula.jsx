import {get} from "../../utils/httpClient";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./DetallePelicula.css"

export const DetallePelicula=()=>{

    const [pelicula,setPelicula] = useState(null);

    // uso parametros para obtener el id de película a mostrar
    const {peliculaId} = useParams();

    useEffect(()=>{
        get(`/movie/${peliculaId}`).then((data)=>{
            //console.log(data);
            setPelicula(data);
        })
    },[peliculaId]);

    if(!pelicula){
        return(null)
    }
    else{
        const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

    return(
        <div className="contenedorDetalle">
            <img className="col" src={imgURL} alt={pelicula.title} />
            <div className="peliculaDetalle col">
                <p className="item">
                    <strong>Título: </strong>{pelicula.title}
                </p>

                <p>
                    <strong>Descripción: </strong>{pelicula.overview}
                </p>

                <p>
                    <strong>Géneros: </strong>
                    {pelicula.genres.map((genre)=>genre.name).join(", ")}
                </p>

                <p>
                    <strong>Fecha Lanzamiento: </strong> 
                    {pelicula.release_date}
                </p>


                

            </div>
        </div>

    )

    }
    
}

