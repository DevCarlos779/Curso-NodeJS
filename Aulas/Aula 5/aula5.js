const http = require("http");
const fs = require("fs");
const port = process.env.PORT;

const server = http.createServer((required, resolve) => {
    fs.readFile("index.html", (error, arquivo) => {
        resolve.writeHead(200, {
            "Content-Type":"text/html"
        })

        resolve.write(arquivo);
        return resolve.end();
    })
})

server.listen(port || 3000, () => console.log("Servidor Rodando..."));