const {MongoClient} = require('mongodb')
const ObjectId = require("mongodb").ObjectId;
require('dotenv').config();
const Usuarios = require('../model/usuarios-model')

async function recuperarUsuario(entrada) {
    let list = []

    await Usuarios.find(entrada).then((documents) => {
        list = documents
        console.log(list)
    }).catch((err) => {
        console.log(err);
    })

    return list
}

async function recuperarUsuarioPorParte(entrada) {
    let list = []

    entradaRegex = {
        "nome": {$regex: entrada.nome},
        "tipoUsuario": Number(entrada.tipoUsuario)
    }

    console.log(entradaRegex);
    await Usuarios.find(entradaRegex).then((documents) => {
        list = documents
        console.log(list)
    }).catch((err) => {
        console.log(err);
    })

    return list
}

async function inserirUsuario(registro) {

    const usuario = new Usuarios(registro)
    usuario.save().then((usuaioInserido) => {
        console.log(usuario);
        console.log(`O usuário foi inserido. id: ${usuaioInserido._id}`);
    }).catch((err)=>{
        console.log(err);
    })

}

async function atualizarUsuario(id, dados) {
    
    const usuario = new Usuarios(dados)
    const usuarioId = { _id: new ObjectId(id) }

    Usuarios.updateOne(usuarioId, usuario).then((resposta) => {
        console.log(`O usuario foi atualizado com sucesso`);
    }).catch((err)=>{
        console.log(err);
    })
}

async function deletarUsuario(id) {

    const usuarioId = { _id: new ObjectId(id) }

    Usuarios.deleteOne(usuarioId).then((resposta) => {
        console.log(`O usuario foi deletado com sucesso`);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = {
    recuperarUsuario,
    recuperarUsuarioPorParte,
    inserirUsuario,
    atualizarUsuario,
    deletarUsuario
}