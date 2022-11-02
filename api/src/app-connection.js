const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = "mongodb+srv://root:$Kabral2000@gestaocluster.yatw8mq.mongodb.net/?retryWrites=true&w=majority"

function conectar(){
    mongoose.connect(mongoUrl, {dbName: 'Gestao'})
    .then((response) => {
        console.log("Banco de dados conectado")
    }).catch((err) => {
        console.log("Erro na conexão com o banco");
        console.log(err);
    })
}

module.exports = {
    conectar
}