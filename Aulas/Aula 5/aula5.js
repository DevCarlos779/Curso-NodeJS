//aprendendo a ler o conteudo de um arquivo

const http = require("http");

//definindo a variavel q chama a função fs q tem varias funçoes
const fs = require("fs");
const port = process.env.PORT;

const server = http.createServer((required, resolve) => {
    //chamando a função ler arquivo da função fs:
    //passando o nome do arquivo
    //se ouver erro ela retorna error e se der certo ela armazena o conteudo do arquivo na var arquivo

    fs.readFile("index.html", (error, arquivo) => {
        resolve.writeHead(200, {
            "Content-Type":"text/html"
        })

        //escrevendo o conteudo na tela
        resolve.write(arquivo);
        return resolve.end();
    })
})

server.listen(port || 3000, () => console.log("Servidor Rodando..."));