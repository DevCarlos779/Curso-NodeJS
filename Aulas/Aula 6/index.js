const express = require("express");

//pegando o arquivo de rotas
const rotas = require("./rotas/rotas");
const port = process.env.PORT || 3000;

//criando a variavel q executa a requisição express
const app = express();

//se a rota for / usa o arquivo de rotas
app.use("/", rotas);

//se a rota não for / ou for diferente, retorna iddo:
app.get("*", (required, resolve) => {
    resolve.send("CFB Cursos");
})

app.listen(port, () => {
    console.log("Servidor Rodando...");
})