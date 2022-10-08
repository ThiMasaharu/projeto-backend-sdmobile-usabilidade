const UsuarioService = require('../service/usuario-service')

module.exports = () => {
    const controller = {};
    controller.listaUsuario = [];

    controller.inserirUsuario = (usuario) => {
        UsuarioService.inserirUsuario(usuario);
    }

    controller.recuperarUsuario = () => {
        controller.listaUsuario = UsuarioService.recuperarUsuario();
    }

    controller.atualizarUsuario = (id, dados) => UsuarioService.atualizarUsuario(id, dados);

    controller.deletarUsuario = (id) => UsuarioService.deletarUsuario(id);

    return controller;
}