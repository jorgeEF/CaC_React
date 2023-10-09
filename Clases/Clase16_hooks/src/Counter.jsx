import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button"

export const Counter = () =>{
    // useState
    let cantidad = 10;
    const [contador,setContador] = useState(cantidad);

    // useEffect
    useEffect(()=>{
        alert("Cambió el contador")
    },[contador])

    return(
        <>
        <p>Contador:{contador}</p>        

        <Button variant="success" onClick={()=>setContador(contador+1)}>Sumar</Button>{' '}
        <Button variant="danger" onClick={()=>setContador(contador-1)}>Restar</Button>{' '}

        </>
    )
}