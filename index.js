const express = require('express');
const { faker } = require('@faker-js/faker');
const routerApi = require('./routes');
const router = require('./routes/productsRouter');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola desde mi server de express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
})

routerApi(app);

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});
