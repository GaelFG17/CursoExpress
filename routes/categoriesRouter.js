const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/:categoryid/products/:idProduct', (req, res) => {
  const { categoryid, idProduct } = req.params;
  res.json({
    categoryid,
    idProduct,
  });
})

module.exports = router;
