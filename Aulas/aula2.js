//criando requisição

const http = require('http');

//criando servidor
http.createServer((required, response) => {

    //definindo o tipo da resposta no cabeçalho
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    //definindo o conteudo da resposta
    response.write("CFB Cursos \n");

    //definindo que a resposta chegou no  fim
    response.end();
}).listen(1337);

//acima, definindo a porta q vai escutar a resposta

//agora basta rodar o servidor usando o node aula2.js
//e abrir a porta localhost:1337 que vai conter o conteudo (resposta) do servidor
//nesse caso vai aparecer "CFB Cursos"