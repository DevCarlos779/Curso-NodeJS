// modularizando rotas

//criando a requisição express
const express = require("express");

//criando a variavél que chama a função router da função express
const rotas = express.Router();

//criando o array de objetos(cursos)
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


//quando a rota for / vai retornar um json de seja bem vindo
rotas.get("/",(required, resolve) => {
    resolve.json({ola: "Seja bem vindo"});
})


//quando a rota for / + um nome vai retornar uma pesquisa
rotas.get('/:cursoid',(required, resolve) => {
    //pegando o parametro do nome do curso informado na url
    const curso = required.params.cursoid;
    //criando a variavel q vai armqazenar o resultado da pesquisa
    let cursoI = cursosInfo.filter((Curso) => {
        //a pesquisa percorre o array de cursos e retorna somente o curso q tem nome igual ao passado na url
        if(Curso.curso == curso) {
            return Curso;
        }
    });

    //caso a pesquisa não retorne um curso, então imprime um json de curso não encontrado
    if(cursoI.length == 0) {
        resolve.status(404).json(
            {erro: "Curso não encontrado", cursoPesquisado: curso}
        );
    } 
    //caso a pesquisa retorne um curso, então imprime as caracteristicas do curso
    else {
        resolve.status(200).json(cursoI);
    }
})

//exportando o arquivo de rotas como rotas
module.exports = rotas;