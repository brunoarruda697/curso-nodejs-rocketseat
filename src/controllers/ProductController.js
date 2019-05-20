const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {

    // usando desestruturação do es6.
    // query são para parametros get, estou pegando o parametro "page"
    // que está dentro da query.
    const { page = 1 } = req.query;

    // dentro do parametro nesse objeto poderia ser passado nossos "where's"
    // nossas condições da paginação, filtros...
    // "page" está sendo usado short syntax, é o mesmo de page: page,.
    const products = await Product.paginate({}, { page, limit: 10});
    // a linha debaixo só sera executada depois que a linha de cima
    // terminar de executar, isso graças ao async/await
    return res.json(products);
    // retorna os produtos como json.
  },

  async store(req, res) {
    // create
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    
    return res.json(product);
  },

  async update(req, res) {
    // se não usar o { new: true } ele irá retornar o produto desatualizado para a variavel product
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true})

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    // .send retorna uma mensagem de sucesso;
    return res.send();
  }
};