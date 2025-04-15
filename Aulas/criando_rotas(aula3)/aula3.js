//Criando rotas sem express

//defino a requisição e a porta
const http = require("http");
const port = 3000;
const host = "127.0.0.1";

//crio o servidor

const servidor = http.createServer((required, response) => {

    //definindo o tipo de dados da resposta do servidor

    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    //criando as rotas

    //se a url for "/" a reposta vai ser essa:
    if(required.url == "/") {
        response.write("<h1>Seja bem vindo</h1>");
    }
    //se a url for "/canal" a reposta vai ser essa:
    else if(required.url == "/canal") {
        response.write("<h1>CFB Cursos</h1>");
    }
     //se a url for "/curso" a reposta vai ser essa:
    else if(required.url == "/curso") {
        response.write("<h1>Conheça os Cursos do Nosso Canal</h1>");
    } 
     //se a url for "/curso/node" a reposta vai ser essa:
    else if(required.url == "/curso/node") {
        response.write("<h1>Curso de NodeJS</h1>");
    }

    response.end();
});

servidor.listen(port, host, () => {console.log("Servidor Ligado!")});

