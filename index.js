const app = require('./config/express')();
const port = app.get('port');

app.listen(port, ()=>{
    console.log('rodando na porta 8080');
});