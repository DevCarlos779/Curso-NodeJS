const conectar = async () => {
    if(global.conexao && global.conexao.state != "disconected") 
        return global.conexao

    const mysql = require("mysql2/promise");
    const con = mysql.createConnection("mysql://root:15718950acl@localhost:3306/cfbcursos");

    console.log("conectou ao banco");
    global.conexao = con;
    return con;
}

const todosClientes = async () => {
    const con = await conectar();
    const [linhas] = await con.query("SELECT * FROM cliente");
    return await linhas;
}

module.exports = {todosClientes};