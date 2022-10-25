const ConsultaService = require('../service/consulta-service')

module.exports = () =>{

    const controller = {};
    controller.listaClientes = [];

    controller.inserirRegistro = (registro) => {
        ConsultaService.inserirRegistroCliente(registro);
    }

    controller.recuperarConsultas = (entrada) => {
        if (entrada.idade !== undefined) {
            entrada.idade = Number(entrada.idade);
        }
        controller.listaClientes = ConsultaService.recuperarConsultas(entrada);
    };

    controller.recuperarConsultaPorId = (entrada) => {
        controller.consulta = ConsultaService.recuperarConsultaPorId(entrada);
    }

    controller.atualizarRegistro = (id, dados) => ConsultaService.atualizarRegistro(id, dados)

    controller.deletarRegistro = (id) => ConsultaService.deletarRegistro(id)

    return controller;

}