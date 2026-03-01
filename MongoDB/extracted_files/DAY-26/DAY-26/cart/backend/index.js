const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 5000;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

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

//Fetch cart for user
app.get("/api/cart/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId: parseInt(userId) });
    res.json(cart || { userId: parseInt(userId), items: [] });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});
//Add Item to cart
app.post("/api/cart/add", async (req, res) => {
  try {
    const { userId, productId, quantity = 1 } = req.body;
    let cart = await Cart.findOne({ userId: parseInt(userId) });
    if (!cart) {
      cart = new Cart({ _id: userId, userId, items: [] });
    }

    const existingItem = cart.items.find((item) => item.productId == productId);
    console.log(existingItem);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product in cart" });
  }
});

//DELETE /api/cart/remove  {userId,productId}

app.delete("/api/cart/remove", async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    cart.items = cart.items.filter((item) => item.productId !== productId);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to remove product in cart" });
  }
});

//Home Page
app.get("/", (req, res) => {
  res.send("Working...");
});

//Server Running
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
