const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// iniciando o app
const app = express();

// permite que nossa aplicação receba requisições com o formato json
app.use(express.json());

// permite o uso do cors, isso faz com que nossa api possa ser acessada
// publicamente
app.use(cors());

// iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true});

requireDir('./src/models');

// Rotas
// toda vez que receber uma requisição a partir da rota /api
// irá ser mandado para o arquivo routes estas requisições
app.use('/api', require('./src/routes'));

app.listen(3001);