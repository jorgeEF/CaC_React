import express from "express"
import cors from "cors"
import db from "./database/db.js";
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
const port = 3000;

// configuramos app express con cors y json
app.use(cors())
app.use(express.json())

app.use("/post",postRoutes)
app.use("/user",userRoutes)

// conexion a db
const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log("conectado a la db")
    } catch (error) {
        console.log(`error: ${error} `)
        
    }
}

app.listen(port, ()=>{
    conexionDB()
    console.log(`Servidor del proyecto corriendo en puerto ${port}`)
})

