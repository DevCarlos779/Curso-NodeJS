//primeiro criamos a função conectar, que vai estabelecer uma conexão com o mysql
const conectar = async () => {
    //assim que ele entra na função, verifica se esta concetado, se nao estiver ainda, ele inicia a conexao
    //de acordo como esta abaixo

    if(global.conexao && global.conexao.state != "disconected") 
        return global.conexao

    //aqui
    //primeiro criamos a variavel q vai receber todos os metodos e comando da biblioteca do mysql
    const mysql = require("mysql2/promise");

    //depois criamos a variavel de conexao, que usa o metodo create connection da variavel mysql
    const con = mysql.createConnection("mysql://root:15718950acl@localhost:3306/cfbcursos");

    //console.log para infromar que a conexao foi estabelecida
    console.log("conectou ao banco");

    //atribuimos a conexão a uma variavel globalo.conexao
    global.conexao = con;

    //retornamos a conexao ao final do processo
    return con;
}

//agora podemos criar as funçoes que vao manipular e consumir nosso banco de dados

//a primeira sera essa, que retornará todos os clientes
const todosClientes = async () => {
    //primeiro criamos uma variavel que vai chamar a função conectar e aguardar a concexao sem efetivada
    //essa variavel consequentemente herda todas a funçoes e metodos para manipular nosso banco
    const con = await conectar();

    //agora criamos a variavel que vai chamar e esperar a con retornar todos os clientes por meio do metodo query
    const [linhas] = await con.query("SELECT * FROM cliente");

    //por fim vamos dar um return nas linhas somente depois delas serem preenchidas com os clientes
    return await linhas;
}

//criando a função de inserir cliente
//função ao ser chamada pede o nome, cpf e tipo do cliente
const inserirCliente = async (nome, cpf, tipo) => {
    //primeiro criamos uma variavel que vai chamar a função conectar e aguardar a concexao sem efetivada
    //essa variavel consequentemente herda todas a funçoes e metodos para manipular nosso banco
    const con = await conectar();

    //criamos o comando SQL para inserir o cliente
    const sql = 'INSERT INTO cliente (s_nome_cliente, s_cpf_cliente, i_tipo_cliente) VALUES (?,?,?)';

    //colocamos os valores que serão colocados as chamar a função em um variavel
    const valores = [nome, cpf, tipo];

    //fazemos a query com o codigo sql passando os respectivos valores de "valores"
    await con.query(sql, valores);

    //console para informar que deu tudo certo
    console.log("Cliente" + nome + "Inserido Com Sucesso!");
}

//criando a função de atualizar cliente
//função ao ser chamada pede o nome, cpf, tipo do cliente e o id
const atualizarCliente = async (nome, cpf, tipo, id) => {
    //primeiro criamos uma variavel que vai chamar a função conectar e aguardar a concexao sem efetivada
    //essa variavel consequentemente herda todas a funçoes e metodos para manipular nosso banco
    const con = await conectar();

    //criamos o comando SQL para inserir o cliente
    const sql = 'UPDATE cliente SET s_nome_cliente=?, s_cpf_cliente=?, i_tipo_cliente=? WHERE i_cliente_cliente=?';

    //colocamos os valores que serão colocados as chamar a função em um variavel
    const valores = [nome, cpf, tipo, id];

    //fazemos a query com o codigo sql passando os respectivos valores de "valores"
    await con.query(sql, valores);

    //console para informar que deu tudo certo
    console.log("Cliente" + id + "Atualizado Com Sucesso!");
}

//criando a função de deletar cliente
//função ao ser chamada pede o nome, cpf e tipo do cliente
const deletarCliente = async (id) => {
    //primeiro criamos uma variavel que vai chamar a função conectar e aguardar a concexao sem efetivada
    //essa variavel consequentemente herda todas a funçoes e metodos para manipular nosso banco
    const con = await conectar();

    //criamos o comando SQL para inserir o cliente
    const sql = 'DELETE FROM cliente WHERE i_cliente_cliente=?';

    //colocamos os valores que serão colocados as chamar a função em um variavel
    const valores = [id];

    //fazemos a query com o codigo sql passando os respectivos valores de "valores"
    await con.query(sql, valores);

    //console para informar que deu tudo certo
    console.log("Cliente" + id + "Deletado Com Sucesso!");
}

//ao final de tudo devemos exportar a funçao todos os clientes que será usada no index
module.exports = {todosClientes, inserirCliente, atualizarCliente, deletarCliente};