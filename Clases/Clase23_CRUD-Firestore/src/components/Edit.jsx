import {useState,useEffect} from "react";
import {Link,useParams, useNavigate} from "react-router-dom";
import {db} from "../firebaseConfig/firebase.js";
import {getDoc,updateDoc,doc} from "firebase/firestore";

export const Edit = () => {
    // Estados: get set de cada atributo
    const [name,setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [alias, setAlias] = useState("");
    const [power, setPower] = useState("");

    // useNavigate para ejecutar al guardar edicion
    const navigate = useNavigate();

    // obtenemos id desde parametros en URL
    const {id} = useParams();

    // funcion para actualizar un documento
    const update = async (e)=>{
        e.preventDefault();
        const heroeDoc = doc (db,"heroes", id);

        const data = {
            name: name,
            lastname: lastname,
            age: age,
            gender: gender,
            alias: alias,
            power: power
        };
    
        await updateDoc(heroeDoc, data);
        navigate("/");
    }

    // funcion traer documento por id
    const getHeroeById = async (id)=>{
        const heroeDoc = await getDoc (doc(db,"heroes", id));
        if(heroeDoc.exists()){
            setName(heroeDoc.data().name);
            setLastname(heroeDoc.data().lastname);
            setAge(heroeDoc.data().age);
            setGender(heroeDoc.data().gender);
            setAlias(heroeDoc.data().alias);
            setPower(heroeDoc.data().power);
        } else {
            <h1>El heroe no existe</h1>
        }
    }

    // llamamos funcion principal
    useEffect(() => {
        getHeroeById(id)    
      
    }, []);
    
    
    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col">                        
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Edad</th>
                                    <th>Genero</th>
                                    <th>Alias</th>
                                    <th>Poder</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>                                
                                    <tr>
                                        <td><input type="text" value={name}></input></td>
                                        <td><input type="text" value={lastname}></input></td>
                                        <td><input type="text" value={age}></input></td>
                                        <td><input type="text" value={gender}></input></td>
                                        <td><input type="text" value={alias}></input></td>
                                        <td><input type="text" value={power}></input></td>
                                        <td>                                            
                                            <button className="ms-1 btn btn-danger btn-sm" onClick={()=>{confirmDelete(heroe.id)}}><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}