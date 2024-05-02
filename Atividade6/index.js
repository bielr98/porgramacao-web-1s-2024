const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/dados', (req, res) => {
    res.render('dados', req.body);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
