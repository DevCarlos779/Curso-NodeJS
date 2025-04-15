//passando parametros na url

const http = require("http");

//pegando a url
const url = require("url");
const port = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((required, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    response.write(required.url);

    //pegando os parametros da url
    const parametros = url.parse(required.url, true).query;

    //escrevendo eles na tela
    response.write("<br>" + parametros.nome);
    response.write("<br>" + parametros.curso);

    response.end();
});

servidor.listen(port, host, () => {console.log("Servidor Ligado!")});

