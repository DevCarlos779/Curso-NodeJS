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

//ao final de tudo devemos exportar a funçao todos os clientes que será usada no index
module.exports = {todosClientes};