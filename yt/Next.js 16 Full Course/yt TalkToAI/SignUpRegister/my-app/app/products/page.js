import { fetchProducts } from "../action";
import { ProductList } from "./ProductList";
import Image from "next/image";
import SearchBar from "../../app/action/SearchAction";
import Link from "next/link";

export default async function Productspage({ searchParams }) {
  const params = await searchParams;
  const query = params.query || "";
  console.log("Query:", query);

  let filteredProducts = [];
  if (query.trim()) {
    filteredProducts = await SearchBar(query);
  } else {
    filteredProducts = await fetchProducts();
  }
  console.log("filtered products", filteredProducts);

  return (
    <div className="w-full">
      {/* Display the list of products */}
      <h1 className="text-4xl font-bold uppercase text-center my-10">
        Products
      </h1>

      {query ? (
        <div>
          <h2 className="text-2xl font-bold mx-4 mb-4">
            Search Results for "{query}"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="border rounded-lg p-4 shadow-md"
                >
                  <Link href={`/product/${product._id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </Link>
                  <h4 className="font-bold mt-2">{product.name}</h4>
                  <h4 className="text-sm text-gray-600">{product.category}</h4>
                  <h4 className="font-bold text-green-600">₹{product.price}</h4>

                  <Link href={`/product/${product._id}`}>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-10">
                No products found matching "{query}"
              </p>
            )}
          </div>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}
