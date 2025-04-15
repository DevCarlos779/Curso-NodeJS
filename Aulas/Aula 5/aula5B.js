//aprendendo a criar arquivos 

const http = require("http");

//criando a var q chama a função fs que tem várias funções
const fs = require("fs");
const port = process.env.PORT;

const server = http.createServer((required, resolve) => {
    //chamando a função de criar arquivo da função fs
    //passando o nome do arquivo e o conteudo q quero escrever nele
    //se der certo els automaticamente cria o arquivo, se não ela chama o metodo error
    fs.appendFile("teste.txt", "Curso de NodeJS", (error) => {
        if(error) throw error;
        console.log("arquivo criado")
        resolve.end();
    })
})

server.listen(port || 3000, () => console.log("Servidor Rodando..."));