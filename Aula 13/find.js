const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://carlosemanu779:15718950acl@cluster0.v0py6lk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const func = async () => {

    client.connect();

    const dbo = client.db('nodejscurso');

    const obj = { curso: 'Curso de NodeJS', canal: 'CFB Cursos' };

    const colecao = 'cursos';

    //findOne retorna somente o primeiro resultado que corresponde ao filtro passado dentro dele!
    //{} vazias significa nenhum filtro

    //find retorna todos os resultados que correspondem ao filtro informado
    //pode ser usado junto com o toArray para tornar mais facil a manipulação dos dados
    //aceita outro parametro alem dos filtros, esse parametro é o projection, que determina quais caracteristicas do obj vc quer imprimir
        
    //crio a variavel que vai armazenar o resultado da minha pesquisa usando findOne:

    //sem filtro
    const res = await dbo.collection(colecao).findOne({});

    //com filtro
    const res2 = await dbo.collection(colecao).findOne({canal: 'CFB Cursos'});

    //com filtro e projeção
    const res3 = await dbo.collection(colecao).findOne({canal: "CFB Cursos"}, {projection: {_id: 0}});

    //find tranformando em array
    const res4 = await dbo.collection(colecao).find({canal: "CFB Cursos"}, {projection: {_id: 0}}).toArray();

    //imprimo o resultado da pesquisa
    console.log("find sem filtro");
    console.log(res);
    console.log("-----------");

    console.log("find com filtro");
    console.log(res2);
    console.log("-----------");

    console.log("find com filtro e sem mostrar o id (projeção)");
    console.log(res3);
    console.log("-----------");

    console.log("find com array");
    console.log(res4);
    console.log("-----------");

    client.close();
}

func();



