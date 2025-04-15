const express = require("express");
const rotas = express.Router();

let cursosInfo = [
    {
        "curso": "node",
        "info": "Curso de Node"
    },
    {
        "curso": "react",
        "info": "Curso de React"
    },
    {
        "curso": "javascript",
        "info": "Curso de Javascript"
    }
    
]

rotas.get("/",(required, resolve) => {
    resolve.json({ola: "Seja bem vindo"});
})

rotas.get('/:cursoid',(required, resolve) => {
    const curso = required.params.cursoid;
    let cursoI = cursosInfo.filter((Curso) => {
        if(Curso.curso == curso) {
            return Curso;
        }
    });
    if(cursoI.length == 0) {
        resolve.status(404).json(
            {erro: "Curso não encontrado", cursoPesquisado: curso}
        );
    } else {
        resolve.status(200).json(cursoI);
    }
})

module.exports = rotas;