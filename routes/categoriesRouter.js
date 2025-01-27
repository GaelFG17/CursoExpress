app.get('/:categoryid/products/:idProduct', (req, res) => {
  const { categoryid, idProduct } = req.params;
  res.json({
    categoryid,
    idProduct,
  });
})
