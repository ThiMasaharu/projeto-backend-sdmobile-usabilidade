const {MongoClient} = require('mongodb')
const ObjectId = require("mongodb").ObjectId;
require('dotenv').config();

const uri = process.env.DB_LINK

const client = new MongoClient(uri);

async function recuperarConsultas(entrada){
    let list = []
    try{
        await client.connect()
        const res = await client.db('Gestao').collection('Consultas').find(entrada).toArray();
        
        list = res
    }catch(e){
        console.log(e)
    }finally{
        await client.close()
    }
    return list
} 

async function recuperarConsultaPorId(entrada){
    let list = []
    try{
        entradaId = { _id: new ObjectId(entrada._id) }
        await client.connect()
        const res = await client.db('Gestao').collection('Consultas').findOne(entradaId);
        
        list = res
    }catch(e){
        console.log(e)
    }finally{
        setTimeout(() => {
            client.close();
        }, 200)
    }
    return list
} 

async function inserirRegistroCliente(registro){
    try{
        await client.connect();
        const res = await client.db('Gestao').collection('Consultas').insertOne(registro);
        
        console.log(`Foi inserido um registro de consulta. ID: ${res.insertedId}`)
    }catch(e){
        console.log(e);
    }finally{
        setTimeout(() => {
            client.close();
        }, 200)
    }
}

async function atualizarRegistro(id, dados){
    
    try{
        await client.connect()
        const res = await client.db('Gestao').collection('Consultas').updateOne({ 
                _id: new ObjectId(id) // tem que importar a função ObjectId
            }, 
            {$set: dados}
        )
        return res;
    }catch(e){
        console.log(e);
    }finally{
        setTimeout(() => {
            client.close();
        }, 200)
    }
}

async function deletarRegistro(id){
    try{
        await client.connect()
        const res = await client.db("Gestao").collection('Consultas').deleteOne({_id: new ObjectId(id)})
        console.log(res);
        return res
    }catch(e){
        console.log(e)
    }finally{
        await client.close()
    }
}


module.exports = {
    recuperarConsultas,
    recuperarConsultaPorId,
    inserirRegistroCliente,
    atualizarRegistro,
    deletarRegistro
}