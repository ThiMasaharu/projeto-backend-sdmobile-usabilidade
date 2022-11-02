const mongoose = require('mongoose')
const { Schema } = mongoose

const Consulta = new Schema({
    nome: {type: String, required: false},
    email: {type: String, required: false},
    data: {type: String, required: false},
    cpf: {type: String, required: false},
    descricao: {type: String, required: false}
})

module.exports = mongoose.model('Consultas', Consulta, 'Consultas')