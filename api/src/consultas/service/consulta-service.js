const ObjectId = require("mongodb").ObjectId;
require('dotenv').config();
const Consultas = require('../model/consultas-model')


async function recuperarConsultas(entrada){
    let list = []

    await Consultas.find(entrada).then((documents) => {
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
    registro.paciente = JSON.parse(registro.paciente)
    registro.medico = JSON.parse(registro.medico)
    const consulta = new Consultas(registro)
    consulta.save().then((consultaInserida) => {
        console.log(`A consulta foi inserida. id: ${consultaInserida._id}`);
    }).catch((err)=>{
        console.log(err);
    })
}

async function atualizarRegistro(id, dados){

    dados.paciente = JSON.parse(dados.paciente)
    dados.medico = JSON.parse(dados.medico)
    // const consulta = Consultas(dados)
    const consultaId = { _id: new ObjectId(id) }

    Consultas.updateOne(consultaId, dados).then((resposta) => {
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