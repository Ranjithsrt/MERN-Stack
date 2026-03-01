import React from "react";

const Cart = ({ cart, products, onRemove, total, onUpdate }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 justify-between">
        <span> Shopping Cart</span>
        <span> ₹ {total.toFixed(2)}</span>
      </h2>

      <div className="space-y-4">
        {cart.items.map((item) => {
          const product = products.find((p) => p._id == item.productId);
          if (!product) return null;
          return (
            <div key={item.productId} className="border p-4 rounded flex justify-between items-center">
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">
                  ₹{product.price} x {item.quantity} = ₹{(product.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => onUpdate(item.productId, item.quantity - 1)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button onClick={() => onUpdate(item.productId, item.quantity + 1)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                  +
                </button>
                <button onClick={() => onRemove(item.productId)} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
