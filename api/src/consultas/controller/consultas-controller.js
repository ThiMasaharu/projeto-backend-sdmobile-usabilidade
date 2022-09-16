const ConsultaService = require('../service/consulta-service')

module.exports = () =>{

    const controller = {};
    controller.listaClientes = [];

    controller.inserirRegistro = (registro) => {
        ConsultaService.inserirRegistroCliente(registro);
    }

    controller.recuperarConsultas = () => {
        controller.listaClientes = ConsultaService.recuperarConsultas();
    };

    controller.atualizarRegistro = (id, dados) => ConsultaService.atualizarRegistro(id, dados)

    controller.deletarRegistro = (id) => ConsultaService.deletarRegistro(id)

    return controller;

}