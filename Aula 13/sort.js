const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://carlosemanu779:15718950acl@cluster0.v0py6lk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const func = async () => {
    await client.connect();

    const dbo = client.db("nodejscurso");

    //aprendendo sobre a função sort (usada para ordenar o resultado de uma pesquisa)

    //sort precisa de uma instrução que declare a ordem que ela deve ordenar

    const query = {};

    //no meu caso, ordenei de acordo com o nome dos cursos e como passei o valor 1, ele ordena de forma crescente, já se fosse -1 ele ordenaria de forma decrescente

    const ordenacao = {curso: 1};
    const res = await dbo.collection("cursos").find(query).sort(ordenacao).toArray();

    console.log(res);

    client.close();
}

func();

