const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://carlosemanu779:15718950acl@cluster0.v0py6lk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const func = async () => {
    await client.connect();

    const dbo = client.db("nodejscurso");

    const query = {curso: "Curso de Mongo"};
    const novoValor = {$set:{curso: "Curso de Mongo 2025"}}

    await dbo.collection("cursos").updateOne(query, novoValor);

    console.log("Atualizando somente o Primeiro");

    const res = await dbo.collection("cursos").find({}).toArray();
    
    await console.log(res);

    console.log("--------------------");
    console.log("Atualizando somente o Todos");

    await dbo.collection("cursos").updateMany(query, novoValor);

    const res2 = await dbo.collection("cursos").find({}).toArray();
    
    await console.log(res2);

    client.close();
}

func();

