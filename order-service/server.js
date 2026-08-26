const express = require("express");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

const orders = [];

app.post("/orders", (req, res) => {
  const { productId, quantity } = req.body;

  if (!Number.isInteger(productId) || !Number.isInteger(quantity) || quantity < 1) {
    return res.status(400).json({error: "productId and positive integer quantity are required"});
  }

  const order = {
    orderId: crypto.randomUUID(),
    productId,
    quantity,
    status: "CONFIRMED",
    createdAt: new Date().toISOString()
  };

  orders.push(order);
  res.status(201).json(order);
});

app.get("/orders", (req, res) => res.json(orders));

app.get("/health", (req, res) => {
  res.json({service: "order-service", status: "healthy"});
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Order service listening on ${PORT}`));
}

module.exports = app;
