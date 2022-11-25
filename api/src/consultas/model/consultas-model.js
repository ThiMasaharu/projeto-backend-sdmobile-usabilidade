const mongoose = require('mongoose')
const { Schema } = mongoose

const Consulta = new Schema({
    medico: {type: Object, required: false},
    paciente: {type: Object, required: false},
    data: {type: String, required: false},
    hora: {type: String, required: false},
    descricao: {type: String, required: false}
})

module.exports = mongoose.model('Consultas', Consulta, 'Consultas')