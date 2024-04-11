const express = require('express');
const { somar, subtrair, multiplicar, dividir } = require('./util/calculadora');

const app = express();
const port = 3000;

app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send({ resultado: somar(a, b) });
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send({ resultado: subtrair(a, b) });
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send({ resultado: multiplicar(a, b) });
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    try {
        const resultado = dividir(a, b);
        res.send({ resultado });
    } catch (error) {
        res.status(400).send({ erro: error.message });
    }
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Calculadora API</h1>
        <p>Use as seguintes rotas para realizar operações matemáticas:</p>
        <ul>
            <li>Somar: <code>/somar/:a/:b</code></li>
            <li>Subtrair: <code>/subtrair/:a/:b</code></li>
            <li>Multiplicar: <code>/multiplicar/:a/:b</code></li>
            <li>Dividir: <code>/dividir/:a/:b</code></li>
        </ul>
        <p>Substitua <code>:a</code> e <code>:b</code> pelos números desejados.</p>
    `);
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
