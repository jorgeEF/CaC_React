import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore";
import {db} from "../firebaseConfig/firebase.js";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const mySwal = withReactContent (Swal);

export const Show = () => {
    // 1 configurar useState
    const [heroes,setHeroes] = useState([]);
    // 2 referenciar fb de firestore
    const heroesCollection = collection(db,"heroes");
    // 3 funcion para mostrar todos los documentos
    const getHeroes = async() => {
        const data = await getDocs (heroesCollection)
        //console.log(data.docs);
        setHeroes(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
        //console.log(heroes)
    }
    // 4 funcion para eliminar un documento
    const deleteHeroe = async(id)=> {
        const heroeDoc = doc(db,"heroes",id);
        await deleteDoc(heroeDoc);
    }
    // 5 funcion para sweet alert (confirma eliminacion)
    const confirmDelete = (id)=>{
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar.',
            confirmButtonText: 'Si, eliminalo!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteHeroe(id);
              Swal.fire(
                'Borrado!',
                'El heroe fue eliminado.',
                'success'
              )
            }
          })
    }
    // 6 useEffect
    useEffect(() => {
      getHeroes();      
    }, [])
    
    // 7 devolver la vista del componente
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-grid gap-2">
                            <Link to="/create">CREAR</Link>
                            <Link to="/edit">EDITAR</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}