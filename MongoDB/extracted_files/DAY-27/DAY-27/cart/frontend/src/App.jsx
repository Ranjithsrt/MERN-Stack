import axios from "axios";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import { useEffect } from "react";
const API_BASE = "http://localhost:5000/api";
const USER_ID = 8;

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [] });

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE}/products`);
      setProducts(res.data);
    } catch (error) {
      console.log("Error in fetching products : ", error);
    }
  };

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${API_BASE}/cart/${USER_ID}`);
      setCart(res.data);
    } catch (error) {
      console.log("Error in fetching cart : ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const addToCart = async (productId, quantity = 1) => {
    try {
      const res = await axios.post(`${API_BASE}/cart/add`, { userId: USER_ID, productId, quantity });
      setCart(res.data);
    } catch (error) {
      console.log("Error in add product to cart : ", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await axios.delete(`${API_BASE}/cart/remove`, { data: { userId: USER_ID, productId } });
      setCart(res.data);
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  const totalValue = cart.items.reduce((sum, item) => {
    const product = products.find((p) => p._id == item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const updateQuantity = async (productId, quantity) => {
    try {
      const res = await axios.put(`${API_BASE}/cart/update`, { userId: USER_ID, productId, quantity });
      setCart(res.data);
    } catch (err) {
      console.error("Error updating cart:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold mb-2">E-Commerce</h1>
        <p className="text-sm">Cart Total : ₹{totalValue.toFixed(2)}</p>
      </header>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Products products={products} onAddToCart={addToCart} />
        <Cart cart={cart} products={products} onRemove={removeFromCart} total={totalValue} onUpdate={updateQuantity} />
      </div>
    </div>
  );
};

export default App;
