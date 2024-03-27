const matriz_util = require('./util/matriz_util');
const calc = require('./util/calculadora');
const express = require('express');
const app = express();

app.get('/ola', function(req, res){
    res.send('ola mundo');
});
app.get('/meunome', function(req, res){
    res.send('GABRIEL');
});

const PORT = 8080;
app.listen(PORT, function (){
    console.log("App Rodando na porta " + PORT);
});