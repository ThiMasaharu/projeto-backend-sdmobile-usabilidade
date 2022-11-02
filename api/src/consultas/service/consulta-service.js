const ObjectId = require("mongodb").ObjectId;
require('dotenv').config();
const Consultas = require('../model/consultas-model')


async function recuperarConsultas(entrada){
    let list = []

    await Consultas.find().then((documents) => {
        list = documents
    }).catch((err) => {
        console.log(err);
    })

    return list
} 

async function recuperarConsultaPorId(entrada){
    let list = []

    entradaId = { _id: new ObjectId(entrada._id) }
    await Consultas.find(entradaId).then((documents) => {
        console.log(documents);
        list = documents
    }).catch((err) => {
        console.log(err);
    })

    return list
} 

async function inserirRegistroCliente(registro){
    const consulta = new Consultas(registro)
    consulta.save().then((consultaInserida) => {
        console.log(consulta);
        console.log(`A consulta foi inserida. id: ${consultaInserida._id}`);
    }).catch((err)=>{
        console.log(err);
    })
}

async function atualizarRegistro(id, dados){

    const consulta = new Consultas(dados)
    const consultaId = { _id: new ObjectId(id) }

    Consultas.updateOne(consultaId, consulta).then((resposta) => {
        console.log(`A consulta foi atualizada com sucesso`);
    }).catch((err)=>{
        console.log(err);
    })

}

async function deletarRegistro(id){

    const consultaId = { _id: new ObjectId(id) }

    Consultas.deleteOne(consultaId).then((resposta) => {
        console.log(`A consulta foi deletada com sucesso`);
    }).catch((err)=>{
        console.log(err);
    })

}


module.exports = {
    recuperarConsultas,
    recuperarConsultaPorId,
    inserirRegistroCliente,
    atualizarRegistro,
    deletarRegistro
}