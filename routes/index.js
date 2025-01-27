const { mode } = require('crypto-js');
const productsRouter = require('./productsRouter');

function routerApi(){
  app.use('/products', productsRouter);
}

module.exports = routerApi;
