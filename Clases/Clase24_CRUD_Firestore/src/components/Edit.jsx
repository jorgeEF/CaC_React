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
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Modo Edición</h1>
                    <form onSubmit={update}>
                        <div className="mb-3">
                            <label className="form-label">Nombre: </label>
                            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellido: </label>
                            <input type="text" className="form-control" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Edad: </label>
                            <input type="text" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Genero: </label>
                            <input type="text" className="form-control" value={gender} onChange={(e)=>setGender(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Alias: </label>
                            <input type="text" className="form-control" value={alias} onChange={(e)=>setAlias(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Poder: </label>
                            <input type="text" className="form-control" value={power} onChange={(e)=>setPower(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-warning">Editar Heroe</button>
                        <Link to="/" className="btn btn-danger ms-2">
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
        
    )
}