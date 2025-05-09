//cria uma variavel que herda os metodos e funões da biblioteca do mongodb
const { MongoClient } = require('mongodb');

//url para acessar o meu banco de dados
const uri = "mongodb+srv://carlosemanu779:15718950acl@cluster0.v0py6lk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//declaro o cliente
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const func = async() => {



    //conecto com o servidor
    await client.connect();

    //crio o banco nodejscurso
    const dbo = client.db('nodejscurso');

    //obj que quero mandar pra futura coleção que vou criar
    const obj = { curso: 'Curso de Mongo', canal: 'CFB Cursos' };
    const obj2 = [
        { curso: 'Curso de Node', canal: 'CFB Cursos' },
        { curso: 'Curso de SQL', canal: 'CFB Cursos' },
        { curso: 'Curso de HTML', canal: 'CFB Cursos' }
    ]

    //variavel que armazena o nome da coleção
    const colecao = 'cursos';
        
    //crio a coleção e insiro o onjeto ja criado
    await dbo.collection(colecao).insertOne(obj);

    //informo que deu tudo certo
    console.log('Um novo curso inserido');

    await dbo.collection(colecao).insertMany(obj2,async (erro, resultado) => {
        if(erro) throw erro;
        await console.log(resultado.insertedCount)
    });

    console.log('Vários cursos inseridos');

    //finalizo a conexao do cliente
    client.close();

}

func();