const mongoose = require('mongoose')
const { Schema } = mongoose

const Usuario = new Schema({
    nome: {type: String, required: false},
    sobrenome: {type: String, required: false},
    idade: {type: Number, required: false},
    cpf: {type: String, required: false},
    observacoes: {type: String, required: false},   
    tipoUsuario: {type: Number, required: false}
})

module.exports = mongoose.model('Usuarios', Usuario, 'Usuarios')