const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const products = [
  { id: 1, name: "Laptop", description: "Professional development laptop", price: 65000 },
  { id: 2, name: "Keyboard", description: "Mechanical developer keyboard", price: 3500 },
  { id: 3, name: "Monitor", description: "24-inch Full HD monitor", price: 12000 },
  { id: 4, name: "Mouse", description: "Wireless productivity mouse", price: 1500 }
];

app.get("/products", (req, res) => res.json(products));

app.get("/products/:id", (req, res) => {
  const product = products.find(item => item.id === Number(req.params.id));
  if (!product) return res.status(404).json({error: "Product not found"});
  res.json(product);
});

app.get("/health", (req, res) => {
  res.json({service: "product-service", status: "healthy"});
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Product service listening on ${PORT}`));
}

module.exports = app;
