module.exports = app => {
    const ConsultaController = require('./consultas/controller/consultas-controller')();

    // app.route('/api/v1/consultas')
    //     .get(consultaController.listaDb);

    app.get('/api/v1/consultas', (req, res) => {
        ConsultaController.recuperarClientes()
        ConsultaController.listaClientes.then((result) => {
            res.send(result);
        });
    })
}
