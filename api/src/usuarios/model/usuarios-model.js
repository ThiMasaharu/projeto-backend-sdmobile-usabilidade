const mongoose = require('mongoose')
const { Schema } = mongoose

const Usuario = new Schema({
    nome: {type: String, required: false},
    cpf: {type: String, required: false},
    idade: {type: Number, required: false},
    crm: {type: String, required: false},
    contato: {type: String, required: false},
    email: {type: String, required: false},
    senha: {type: String, required: false},
    confirmarSenha: {type: String, required: false},
    tipoUsuario: {type: String, required: false}
})

module.exports = mongoose.model('Usuarios', Usuario, 'Usuarios')