const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://carlosemanu779:15718950acl@cluster0.v0py6lk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const func = async () => {
    await client.connect();

    const dbo = client.db("nodejscurso");

    //aprendendo sobre a delete (usada para deletar itens do banco)

    //delete one (deleta somente o primeiro item que corresponde com o filtro da query):

    const query = {curso: "Curso de Javascript"};

    await dbo.collection("cursos").deleteOne(query, (erro,resultado) => {
        if(erro) throw erro;
        console.log("1 curso deletado");
    });

    //delete many (deleta todos os itens que correspondem com o filtro da query):
    //fiz essa query usando regex para excluir todos os itens que o nome termina com a letra "s"
    const query2 = {curso: /.t/};

    await dbo.collection("cursos").deleteMany(query2, (erro,resultado) => {
        if(erro) throw erro;
        console.log("cursos deletados");
    });

    //imprimindo para verificar se o curso foi excluido

    const query3 = {};

    const ordenacao = {curso: 1};
    const res = await dbo.collection("cursos").find(query3).sort(ordenacao).toArray();

    console.log(res);

    client.close();
}

func();

