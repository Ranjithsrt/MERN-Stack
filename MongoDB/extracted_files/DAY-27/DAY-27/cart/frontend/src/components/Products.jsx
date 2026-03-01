import React from 'react'

const Products = ({products,onAddToCart}) => {
     console.log(products)
  return (
     <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          
            <div className="space-y-4">
            {products.map((product)=>(
              <div key={product._id} className="border p-4 rounded flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600">₹{product.price}</p>
                </div>

                <button onClick={()=>onAddToCart(product._id)}  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
      </div>
  )
}

export default Products