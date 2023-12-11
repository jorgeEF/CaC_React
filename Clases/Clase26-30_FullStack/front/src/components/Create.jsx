import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

// URL de endpoint: nuestra api en back
const api_url = "http://localhost:8000/post/"

export const Create = () => {
  const [titulo,setTitulo] = useState('')
  const [contenido,setContenido] = useState('')

  const navigate = useNavigate();

  // procedimiento para crear un registro
  const create = async (e) => {
    e.preventDefault();

    await axios.post(api_url, {
      title: titulo,
      content: contenido
    })

    navigate("/");
  }

  return (
    <div className='container text-center'>
      <h1>Crear post </h1>
      <form onSubmit={create}>
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
