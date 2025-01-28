const express = require('express');
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');
const peopleRouter = require('./peopleRouter');
const usersRouter = require('./userRouter');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/people', peopleRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
