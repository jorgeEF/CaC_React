import { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

// URL de endpoint: nuestra api en back
const api_url = "http://localhost:8000/post/"

export const Edit = () => {
  const [titulo,setTitulo] = useState('')
  const [contenido,setContenido] = useState('')

  const navigate = useNavigate();

  const {id} = useParams();

  // procedimiento para traer un post por su id
  const getPostById = async () => {
    const res = await axios.get(api_url+id)
    setTitulo(res.data.title);
    setContenido(res.data.content)
  }

  useEffect(()=>{
    getPostById();
  },[])

  // procedimiento para crear un registro
  const update = async (e) => {
    e.preventDefault();

    await axios.put(api_url+id, {
      title: titulo,
      content: contenido
    })

    navigate("/");
  }

  return (
    <div className='container text-center'>
      <h1>Editar post </h1>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label me-1">Titulo de Post </label>
          <input
            type="text" 
            className="form-control"
            id="title"
            value={titulo} 
            onChange={(e)=>setTitulo(e.target.value)} />
          
          <label className="form-label">Contenido</label>
          <input
            type="text-area" 
            className="form-control"
            id="content"
            value={contenido} 
            onChange={(e)=>setContenido(e.target.value)} />
        </div>

        <button type="submit" className='btn btn-primary'>Enviar</button>
      </form>
    </div>
  )
}
