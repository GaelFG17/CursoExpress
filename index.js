const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola desde mi server de express');
})

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});
