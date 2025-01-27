const { mode } = require('crypto-js');
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');
const peopleRouter = require('./peopleRouter');

function routerApi(app){
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/people', peopleRouter);
}

module.exports = routerApi;
