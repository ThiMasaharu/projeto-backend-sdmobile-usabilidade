const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
var cors = require('cors')
const appConnection = require("../api/src/app-connection")

module.exports = () => {
    const app = express();
    app.use(cors())

    app.set('port', 8080)

    app.use(bodyParser.json());

    require('../api/src/consultas/routes/consulta-routes')(app);
    require('../api/src/usuarios/routes/usuarios-routes')(app);

    appConnection.conectar(); //Conecta com o banco de dados assim que inicia o servidor

    return app;
}