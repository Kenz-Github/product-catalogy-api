// server.js
// Simple Product Display API using Express
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory product array (must include at least 5 items, 3 categories, mixed inStock)
const products = [
  { id: 1, name: "Laptop",       category: "Electronics", price: 45000, inStock: true },
  { id: 2, name: "Smartphone",   category: "Electronics", price: 25000, inStock: true },
  { id: 3, name: "Office Chair", category: "Furniture",   price: 7000,  inStock: false },
  { id: 4, name: "Headphones",   category: "Accessories",  price: 1500,  inStock: true },
  { id: 5, name: "Coffee Table", category: "Furniture",   price: 5000,  inStock: false },
  // add more if you want
];

// Middleware: serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// GET /products - returns all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/categories - returns unique categories
app.get('/products/categories', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json({ categories });
});

// GET /products/instock - returns products with inStock true
app.get('/products/instock', (req, res) => {
  const instock = products.filter(p => p.inStock === true);
  res.json(instock);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
