const {MongoClient} = require('mongodb')
require('dotenv').config();

const uri = process.env.DB_LINK

const client = new MongoClient(uri);

async function recuperarClientes(){
    let list = []
    try{
        await client.connect()
        const res = await client.db('Gestao').collection('Consultas').find({}).toArray();
        
        list = res
    }catch(e){
        console.log(e)
    }finally{
        await client.close()
    }
    return list

} 

module.exports = {
    recuperarClientes
}