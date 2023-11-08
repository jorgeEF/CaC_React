import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import {collection,addDoc} from "firebase/firestore";
import {db} from "../firebaseConfig/firebase.js";



export const Create = () => {

    // Estados: get set de cada atributo
    const [name,setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [alias, setAlias] = useState("");
    const [power, setPower] = useState("");

    // useNavigate para ejecutar al guardar edicion
    const navigate = useNavigate();

    // referenciar fb de firestore
    const heroesCollection = collection(db,"heroes");

    // funcion crear heroe
    const createHeroe = async (e) => {
        e.preventDefault();
        await addDoc (heroesCollection,{
            name: name,
            lastname: lastname,
            age: age,
            gender: gender,
            alias: alias,
            power: power
        })
        navigate("/");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Crear Héroe</h1>
                    <form onSubmit={createHeroe}>
                        <div className="mb-3">
                            <label className="form-label">Nombre: </label>
                            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellido: </label>
                            <input type="text" className="form-control" onChange={(e)=>setLastname(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Edad: </label>
                            <input type="text" className="form-control" onChange={(e)=>setAge(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Genero: </label>
                            <input type="text" className="form-control" onChange={(e)=>setGender(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Alias: </label>
                            <input type="text" className="form-control" onChange={(e)=>setAlias(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Poder: </label>
                            <input type="text" className="form-control" onChange={(e)=>setPower(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-warning">Crear Heroe</button>
                        <Link to="/" className="btn btn-danger ms-2">
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}