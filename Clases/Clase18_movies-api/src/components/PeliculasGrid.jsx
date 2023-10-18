import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"
import {get} from "../../utils/httpClient";
import {useState,useEffect} from "react";

export const PeliculasGrid = () => {

    const [peliculas,setPelicula] = useState([]);

    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            console.log(data);
            setPelicula(data.results);
        })
    },[])


    return(
        <ul className="moviesGrid">

            {peliculas.map((pelicula)=>(
                <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
            )) }            
        </ul>
    )
}