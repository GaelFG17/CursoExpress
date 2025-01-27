const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

app.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image : faker.image.url()
    });
  }
  res.json(products);
})

app.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
})

app.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 1',
    precio: 1500
  })
})

module.exports = router;
