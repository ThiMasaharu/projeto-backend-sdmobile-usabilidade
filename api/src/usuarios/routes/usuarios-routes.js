module.exports = app => {
    const UsuarioController = require('../controller/usuarios-controller')();
    
    app.get('/api/v1/usuarios', (req, res) => {
        UsuarioController.recuperarUsuario();
        UsuarioController.listaUsuario.then((result) => {
            res.send(result);
        });
    })

    app.post('/api/v1/usuarios', (req, res) => {
        console.log(req.body);
        UsuarioController.inserirUsuario(req.body);
        res.send('Usuário inserido com sucesso!');
    })

    app.put('/api/v1/usuarios/:id', (req, res) => {
        UsuarioController.atualizarUsuario(req.params.id, req.body);
        res.send('Usuário atualizado com sucesso!');
    })

    app.delete('/api/v1/usuarios/:id', (req, res) => {
        console.log(req.params.id);
        UsuarioController.deletarUsuario(req.params.id);
        res.send('Usuário deletado com sucesso!')
    })
}