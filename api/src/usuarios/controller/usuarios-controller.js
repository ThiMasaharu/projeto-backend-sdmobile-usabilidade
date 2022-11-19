const UsuarioService = require('../service/usuarios-service')

module.exports = () => {
    const controller = {};
    controller.listaUsuario = [];

    controller.inserirUsuario = (usuario) => {
        UsuarioService.inserirUsuario(usuario);
    }

    controller.recuperarUsuario = (entrada) => {
        controller.listaUsuario = UsuarioService.recuperarUsuario(entrada);
    }

    controller.recuperarUsuarioPorParte = (entrada) => {
        controller.listaUsuario = UsuarioService.recuperarUsuarioPorParte(entrada);
    }

    controller.atualizarUsuario = (id, dados) => UsuarioService.atualizarUsuario(id, dados);

    controller.deletarUsuario = (id) => UsuarioService.deletarUsuario(id);

    return controller;
}