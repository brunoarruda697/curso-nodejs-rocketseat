const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// chama o método index do arquivo productController que importamos acima e passa
// como parametro para a rota
routes.get('/products', ProductController.index);

// rota de criação
routes.post('/products', ProductController.store);

// get by id
routes.get('/products/:id', ProductController.show);

// update / put
routes.put('/products/:id', ProductController.update);

// delete
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;