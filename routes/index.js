const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');
const peopleRouter = require('./peopleRouter');
const usersRouter = require('./userRouter');

function routerApi(app){
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/people', peopleRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;
