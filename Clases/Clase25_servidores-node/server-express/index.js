import express from "express";

const app = express();

const puerto = 3000;

app.get("/",(req,res)=>{
    res.send("servidor express")
})

app.get("/contacto",(req,res)=>{
    res.send("pagina de contacto")
})

app.listen(puerto,()=>{
    console.log(`server funcionando en http://localhost:${puerto}`)
})