const {MongoClient} = require('mongodb')
const ObjectId = require("mongodb").ObjectId;
require('dotenv').config();

const uri = process.env.DB_LINK

const client = new MongoClient(uri);

async function recuperarUsuario() {
    let list = []
    try {
        await client.connect();
        const res = await client.db('Gestao').collection('Usuarios').find({}).toArray();
        list = res;
    } catch(e) {
        console.log(e);
    } finally {
        await client.close();
    }
    return list;
}

async function inserirUsuario(usuario) {
    try {
        await client.connect();
        const res = await client.db('Gestao').collection('Usuarios').insertOne(usuario);
        
        console.log(`Foi inserido um usuário. ID: ${res.insertedId}`);
    } catch(e) {
        console.log(e)
    } finally {
        await client.close();
    }
}

async function atualizarUsuario(id, dados) {
    try {
        await client.connect();
        const res = await client.db('Gestao').collection('Usuarios').updateOne({_id: new ObjectId(id)}, 
                                                                               {$set: dados});
        return res;
    } catch(e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

async function deletarUsuario(id) {
    try {
        await client.connect();
        const res = await client.db('Gestao').collection('Usuario').deleteOne({_id: new ObjectId(id)});
        console.log(res);
        return res
    } catch(e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

module.exports = {
    recuperarUsuario,
    inserirUsuario,
    atualizarUsuario,
    deletarUsuario
}