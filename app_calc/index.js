const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

const app = express();
const PORT = 3000;

// Configurar Mustache-Express
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src', 'views')));

app.use('/', calculadoraRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});