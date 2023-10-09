import { useState, useEffect } from 'react';

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
        <button onClick={()=>setContador(contador+1)}>+</button>
        <button onClick={()=>setContador(contador-1)}>-</button>

        </>
    )
}