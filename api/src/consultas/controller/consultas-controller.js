const ConsultaService = require('../service/consulta-service')

module.exports = () =>{

    const controller = {};
    controller.listaClientes = [];

    controller.recuperarClientes = () => {
        controller.listaClientes = ConsultaService.recuperarClientes();
    };

    return controller;

}