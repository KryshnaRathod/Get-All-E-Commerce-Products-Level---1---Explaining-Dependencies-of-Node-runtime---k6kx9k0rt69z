const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending all the products to client here
// Endpoint - /api/v1/products
app.get('/products', (req, res) => {
  if (products.length === 0) {
    return res.status(404).json({
      message: 'Product not found'
    });
  }

  res.status(200).json(products);
});
module.exports = app;
