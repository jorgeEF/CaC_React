import React from 'react'
import ReactDOM from 'react-dom/client'
import Boton from './Boton.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Boton numero = {1}/>
    <Boton numero = {2}/>
    <Boton numero = {3}/>
    <Boton numero = {4}/>
    <Boton numero = {5}/>
  </React.StrictMode>,
)
