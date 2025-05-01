const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://carlosemanu779:15718950acl@cluster0.v0py6lk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const func = async() => {

    await client.connect();

    const dbo = client.db('nodejscurso');

    // const obj = [
    //     { idcurso: 1, curso: 'Curso de Mongo', canal: 'CFB Cursos' },
    //     { idcurso: 2, curso: 'Curso de Node', canal: 'CFB Cursos' },
    //     { idcurso: 3, curso: 'Curso de SQL', canal: 'CFB Cursos' },
    //     { idcurso: 4, curso: 'Curso de HTML', canal: 'CFB Cursos' }
    // ]

    // const obj2 = [
    //     { idcurso: 1, aulas: 10 },
    //     { idcurso: 2, aulas: 20 },
    //     { idcurso: 3, aulas: 30 },
    //     { idcurso: 4, aulas: 40 }
    // ]

    //variavel que armazena o nome da coleção
    const colecao = 'cursos';
    const colecao2 = 'detalhesCursos';

    // await dbo.collection(colecao).insertMany(obj,async (erro, resultado) => {
    //     if(erro) throw erro;
    //     await console.log(resultado.insertedCount)
    // });

    // console.log('Vários cursos inseridos');

    // await dbo.collection(colecao2).insertMany(obj2,async (erro, resultado) => {
    //     if(erro) throw erro;
    //     await console.log(resultado.insertedCount)
    // });

    console.log('Vários cursos inseridos');

    const res = await dbo.collection(colecao).aggregate([
        {
            $lookup:{
                from: colecao2,
                localField: 'idcurso',
                foreignField: 'idcurso',
                as: 'Detalhes'
            }
        }
    ]).toArray();

    res.map((item) => {
        console.log("idcurso: " + item.idcurso);
        console.log("curso: " + item.curso);
        console.log("canal: " + item.canal);
        console.log("Detalhes: " + JSON.stringify(item.Detalhes[0].aulas));
        console.log("----------------");
    })

    

    //finalizo a conexao do cliente
    client.close();

}

func();