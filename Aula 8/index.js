//primeiro baixamos o pacote do mysql usando o codigo npm i mysql2 --save
//depois configuramos a conexão e a funçoes no db.js

//somente depois de configurar o arquivo db.js que manipula o banco de dados e executa a conexao, nós vamos chamar os dados obtidos no index:

//primeiro cria uma arrow function assyncrona que irá esperar a concexao com o banco ser feita e a função todos os clientes ser chamada
(async () => {
    //criamos uma variavel db que herda a função que foi exportada
    const db = require("./db");

    //console para informar que vai inserir um cliente
    console.log("Inserir cliente");

    //chama, passa os valores e espera toda a função inserirCliente ser executada
    await db.inserirCliente("Tung", "00000000000", "1");

    //console para informar que vai Atualizar um cliente
    console.log("Atualizar cliente");

    //chama, passa os valores e espera toda a função atualizarCliente ser executada
    await db.atualizarCliente("Tralaleo tralala", "20020000020", "2", "10");

    //console para informar que vai Deletar um cliente
    console.log("Deletar cliente");

    //chama, passa os valores e espera toda a função deletarCliente ser executada
    await db.deletarCliente("10");


    console.log("Obter todos os clientes");

    //depois criamos uma variavel que vai chamar e aguardar o retorno da função todos os clientes do arquivo db
    const clientes = await db.todosClientes();

    //agora imprimimos o resultado
    console.log(clientes);
})()