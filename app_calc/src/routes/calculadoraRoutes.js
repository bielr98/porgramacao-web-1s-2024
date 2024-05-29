// definindo a tota da aplicacao
const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', (req, res) => {
    res.render('index.html');
});

router.post('/calcular', calculadoraController.calcular);

module.exports = router;