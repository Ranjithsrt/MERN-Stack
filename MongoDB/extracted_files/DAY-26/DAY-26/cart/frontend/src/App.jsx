import axios from "axios";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import { useEffect } from "react";
const API_BASE="http://localhost:5000/api";
const USER_ID=8;

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({items:[]});

    const fetchProducts=async()=>{
      try {
        const res=await axios.get(`${API_BASE}/products`);
        setProducts(res.data);
     
      } catch (error) {
        console.log("Error in fetching products : ",error)
      }
    };

    useEffect(()=>{
      fetchProducts();
    },[]);

    const addToCart =async(productId,quantity=1)=>{

      try {
        const res=await axios.post(`${API_BASE}/cart/add`,{userId:USER_ID,productId,quantity});
        setCart(res.data);
     
      } catch (error) {
        console.log("Error in add product to cart : ",error)
      } 

    }

  return  <div className="min-h-screen bg-gray-100">   
    <header className="bg-blue-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">E-Commerce</h1>
      <p  className="text-sm">Cart Total : ₹0.00</p>
    </header>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">     
      <Products products={products} onAddToCart={addToCart}/>
      <Cart cart={cart} products={products}/>
    </div>
  </div>;
};

export default App;
