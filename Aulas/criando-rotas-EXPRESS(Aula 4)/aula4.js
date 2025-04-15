//criando rotas com express

//fazendo requisição express
const express = require("express");

//definindo a var q chama a requisição
const app = express();

//defininod a porta
const port = process.env.PORT;

//criando as rotas:

//quando o servidor fazer um get e a rota for / a resposta vai ser:
app.get("/", (required, resolve) => {
    resolve.send("Seja Bem Vindo");
})

//quando o servidor fizer um get e a rota for /canal a resposta vai ser:
app.get("/canal", (required, resolve) => {
    resolve.json({canal: "CFB Cursos"});
})

app.listen(port || 3000, () => console.log("Servidor Rodando..."))