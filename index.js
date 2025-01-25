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

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});
