const express = require("express");
const mongoose = require("mongoose");

const PORT = 5000;
const app = express();

//Middleware
app.use(express.json());

//MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/ecommerce-db")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Connection Error : ", err));

//Schemas
const productSchema = new mongoose.Schema(
  {
    _id: Number,
    name: String,
    price: Number,
  },
  { _id: false, collection: "products" }
);
const Product = mongoose.model("Product", productSchema);

const cartSchema = new mongoose.Schema(
  {
    _id: Number,
    userId: Number,
    items: [
      {
        productId: Number,
        quantity: Number,
      },
    ],
  },
  { _id: false, collection: "cart" }
);
const Cart = mongoose.model("Cart", cartSchema);

//Api Endpoints
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

//Home Page
app.get("/", (req, res) => {
  res.send("Working...");
});

//Server Running
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
