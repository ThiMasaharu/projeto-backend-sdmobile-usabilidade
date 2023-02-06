module.exports = app => {
    const UsuarioController = require('../controller/usuarios-controller')();
    let mensagem = "";
    
    app.get('/api/v1/usuarios', (req, res) => {
        if (Object.keys(req.query).length !== 0) {
            req.body = req.query
        }
        console.log(req.body);
        UsuarioController.recuperarUsuario(req.body);
        UsuarioController.listaUsuario.then((result) => {
            if (result.length === 0) {
                mensagem = "Login ou senha incorretos. \n Por favor, tente novamente ou redefina sua senha."
            }
            res.send({result, mensagem});
        });
    })

    app.get('/api/v1/usuarios/buscar-parte', (req, res) => {
        if (Object.keys(req.query).length !== 0) {
            req.body = req.query
        }
        UsuarioController.recuperarUsuarioPorParte(req.body);
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
        console.log("entrou");
        if (Object.keys(req.query).length !== 0) {
            req.body = req.query
        }
        console.log(req.body);
        UsuarioController.atualizarUsuario(req.params.id, req.body);
        res.send('Usuário atualizado com sucesso!');
    })

    app.delete('/api/v1/usuarios/:id', (req, res) => {
        if (Object.keys(req.query).length !== 0) {
            req.body = req.query
        }
        console.log(req.params.id);
        UsuarioController.deletarUsuario(req.params.id);
        res.send('Usuário deletado com sucesso!')
    })
}