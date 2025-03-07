const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'Juan',
    lastname: 'Perez',
    age: 30
  });
})

router.get('//:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Juan',
    lastname: 'Perez',
    age: 30
  });
})

router.get('/:peopleId/categories/:categorieId/products/:idProduct', (req, res) => {
  const { peopleId, categorieId, idProduct } = req.params;
  res.json({
    peopleId,
    categorieId,
    idProduct
  });
})

module.exports = router;
