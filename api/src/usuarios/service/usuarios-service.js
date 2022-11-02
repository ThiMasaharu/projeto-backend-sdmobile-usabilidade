const {MongoClient} = require('mongodb')
const ObjectId = require("mongodb").ObjectId;
require('dotenv').config();
const Usuarios = require('../model/usuarios-model')

const uri = process.env.DB_LINK

const client = new MongoClient(uri);

async function recuperarUsuario() {
    let list = []

    await Usuarios.find().then((documents) => {
        list = documents
    }).catch((err) => {
        console.log(err);
    })

    return list
}

async function inserirUsuario(registro) {

    const usuario = new Consultas(registro)
    usuario.save().then((usuaioInserido) => {
        console.log(usuario);
        console.log(`A consulta foi inserida. id: ${usuaioInserido._id}`);
    }).catch((err)=>{
        console.log(err);
    })

}

async function atualizarUsuario(id, dados) {
    
    const usuario = new Consultas(dados)
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
    inserirUsuario,
    atualizarUsuario,
    deletarUsuario
}