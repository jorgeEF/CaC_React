import http from "http";

const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hola desde el servidor</h1>");
});

server.listen(port, ()=>{
    console.log(`server funcionando en http://localhost:${port}`)
});