const express = require("express");
const app = express();
const port = process.env.PORT;

//criando as rotas:

app.get("/", (required, resolve) => {
    resolve.send("Seja Bem Vindo");
})

app.get("/canal", (required, resolve) => {
    resolve.json({canal: "CFB Cursos"});
})

app.listen(port || 3000, () => console.log("Servidor Rodando..."))