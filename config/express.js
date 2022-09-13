const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
    const app = express();

    app.set('port', 8080)

    app.use(bodyParser.json());

    require('../api/src/routes')(app);

    return app;
}