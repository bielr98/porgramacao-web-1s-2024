const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
    const { num1, num2, operador } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        res.render('index.html', { error: 'Por favor, insira números válidos.' });
    } else {
        const resultado = calculadora.calcularOperacao(Number(num1), Number(num2), operador);
        const operadorNome = calculadora.obterOperadorNome(operador);
        res.render('resultado.html', { resultado, operadorNome, num1, num2 });
    }
};