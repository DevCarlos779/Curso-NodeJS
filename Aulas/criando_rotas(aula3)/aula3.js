const http = require("http");
const port = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((required, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    if(required.url == "/") {
        response.write("<h1>Seja bem vindo</h1>");
    } else if(required.url == "/canal") {
        response.write("<h1>CFB Cursos</h1>");
    } else if(required.url == "/curso") {
        response.write("<h1>Conheça os Cursos do Nosso Canal</h1>");
    } else if(required.url == "/curso/node") {
        response.write("<h1>Curso de NodeJS</h1>");
    }

    response.end();
});

servidor.listen(port, host, () => {console.log("Servidor Ligado!")});

