//primeiro baixamos o pacote do mysql usando o codigo npm i mysql2 --save
//depois configuramos a conexão e a funçoes no db.js

//somente depois de configurar o arquivo db.js que manipula o banco de dados e executa a conexao, nós vamos chamar os dados obtidos no index:

//primeiro cria uma arrow function assyncrona que irá esperar a concexao com o banco ser feita e a função todos os clientes ser chamada
(async () => {
    //ciramos uma variavel db que herda a função que foi exportada
    const db = require("./db");
    console.log("Obter todos os clientes");

    //depois criamos uma variavel que vai chamar e aguardar o retorno da função todos os clientes do arquivo db
    const clientes = await db.todosClientes();

    //agora imprimimos o resultado
    console.log(clientes);
})()