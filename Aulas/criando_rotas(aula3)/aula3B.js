const http = require("http");
const url = require("url");
const port = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((required, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    response.write(required.url);
    const parametros = url.parse(required.url, true).query;
    response.write("<br>" + parametros.nome);
    response.write("<br>" + parametros.curso);

    response.end();
});

servidor.listen(port, host, () => {console.log("Servidor Ligado!")});

