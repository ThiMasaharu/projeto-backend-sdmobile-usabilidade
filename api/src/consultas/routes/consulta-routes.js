module.exports = app => {
    const ConsultaController = require('../controller/consultas-controller')();

    // app.route('/api/v1/consultas')
    //     .get(consultaController.listaDb);

    app.get('/api/v1/consultas', (req, res) => {
        ConsultaController.recuperarConsultas()
        ConsultaController.listaClientes.then((result) => {
            res.send(result);
        });
    })

    app.post('/api/v1/consultas', (req, res) => {
        ConsultaController.inserirRegistro(req.body);
        res.send("Registro inserido com sucesso!");
    })

    app.put('/api/v1/consultas/:id', (req, res) => { 
        ConsultaController.atualizarRegistro(req.params.id, req.body)
        res.send("Registro atualizado com sucesso")
    });

    app.delete('/api/v1/consultas/:id', (req, res) => {
        ConsultaController.deletarRegistro(req.params.id)
        res.send("Registro deletada com sucesso")
    })
}
