const http = require("http");
const fs = require("fs");
const port = process.env.PORT;

const server = http.createServer((required, resolve) => {
    fs.appendFile("teste.txt", "Curso de NodeJS", (error) => {
        if(error) throw error;
        console.log("arquivo criado")
        resolve.end();
    })
})

server.listen(port || 3000, () => console.log("Servidor Rodando..."));