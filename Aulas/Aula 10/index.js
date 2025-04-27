//aprendendo a trabalhar com EVENTOS

//primeiro se cria o serivdor normalmente

const http = require("http");
const porta = process.env.PORT || 3000;

//agora se cria uma variavel que vai herdar todas as funçoes e métodos da biblioteca event
const eventos = require("events");

//agora cria uma variavel que é o uso do metodo eventEmiter da variavel eventos
const EventoEmissor = new eventos.EventEmitter();

//ao ser chamada por meio do metodo "on", a variavel EventoEmissor, necessita do valor que será necessario para que o evento que tambem dever ser informado logo em seguida deva ser executado

EventoEmissor.on("msg", () => {console.log("Disparou o evento")});
EventoEmissor.on("fim", () => {console.log("Disparou o evento Final")});



const servidor = http.createServer((req, res) => {

    //agora atribuimos os valores para EventoEmissor usando o método "emit" nos momentos que desejamos
    EventoEmissor.emit("msg");

    res.writeHead(200, {
        'Content-Type':'text/plain'
    })

    res.write("CFB Cursos");

    EventoEmissor.emit("fim");

    res.end();
})

servidor.listen(porta, () => {console.log("Servidor Rodando...")});