const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
var cors = require('cors')

module.exports = () => {
    const app = express();
    app.use(cors())

    app.set('port', 8080)

    app.use(bodyParser.json());

    require('../api/src/consultas/routes/consulta-routes')(app);

    return app;
}