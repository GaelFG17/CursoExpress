const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola desde mi server de express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
})

app.get('/people', (req, res) => {
  res.json({
    name: 'Juan',
    lastname: 'Perez',
    age: 30
  });
})

app.get('/people/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Juan',
    lastname: 'Perez',
    age: 30
  });
})

app.get('/people/:peopleId/categories/:categorieId/products/:idProduct', (req, res) => {
  const { peopleId, categorieId, idProduct } = req.params;
  res.json({
    peopleId,
    categorieId,
    idProduct
  });
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  }else {
    res.send('No hay parametros');
  }
})

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});
