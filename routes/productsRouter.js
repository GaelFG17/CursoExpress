const express = require('express');

const ProductService = require('./../services/productService');
const service = new ProductService();

const router = express.Router();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id == '999') {
    res.status(404).json({
      message: 'not found'
    });
  }else {
    res.json({
      id,
      name: 'Producto 1',
      precio: 1500
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    id,
    message: 'updated',
    data: body
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  });
});

module.exports = router;
