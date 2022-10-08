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
        console.log(entrada);
        controller.listaClientes = ConsultaService.recuperarConsultas(entrada);
    };

    controller.atualizarRegistro = (id, dados) => ConsultaService.atualizarRegistro(id, dados)

    controller.deletarRegistro = (id) => ConsultaService.deletarRegistro(id)

    return controller;

}