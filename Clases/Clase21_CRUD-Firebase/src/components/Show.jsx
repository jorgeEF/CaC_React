import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore";
import {} from "../firebaseConfig/firebase.js";

import Swal from "sweetalert2";
import withreactContent from "sweetalert2-react-content";
const mySwal = withReactContent (Swal);

export const Show = () => {
    // 1 configurar useState
    // 2 referenciar fb de firestore
    // 3 funcion para mostrar todos los documentos
    // 4 funcion para eliminar un documento
    // 5 funcion para sweet alert (confirma eliminacion)
    // 6 useEffect
    // 7 devolver la vista del componente
    
    return (
        <h1>Aca se van a mostrar todos los documentos</h1>
    )
}