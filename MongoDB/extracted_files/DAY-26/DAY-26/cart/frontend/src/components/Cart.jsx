import React from 'react'

const Cart = ({cart,products}) => {
  
  return (
   <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

    <div className="space-y-4">
        {cart.items.map((item)=>{
            const product = products.find((p) => p._id == item.productId);
            if(!product) return null;
         return ( 
            <div key={item.productId} className="border p-4 rounded flex justify-between items-center">
         <div>
             <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-600">
                ₹{product.price} x {item.quantity} = ₹{(product.price * item.quantity).toFixed(2)}
              </p>
          </div>
          </div>
          
          )
})}
      </div>
    </div>
  )
}

export default Cart