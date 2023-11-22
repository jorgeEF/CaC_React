import express from "express"
import cors from "cors"

const app = express ();
const port = 8000;

// configuramos app express con cors y json
app.use(cors())
app.use(express.json)

// conexion a db



app.listen(port, ()=>{
    console.log(`Servidor del proyecto corriendo en puerto ${port}`)
})

