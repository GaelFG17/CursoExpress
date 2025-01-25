const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola desde mi server de express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
})

app.get('/products', (req, res) => {
  res.json([
    {
    name : 'Producto 1',
    precio: 1500
    },
    {
      name : 'Producto 2',
      precio: 2500
    }
  ]);
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 1',
    precio: 1500
  })
})

app.get('/categories/:categoryid/products/:idProduct', (req, res) => {
  const { categoryid, idProduct } = req.params;
  res.json({
    categoryid,
    idProduct,
  });
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

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});
