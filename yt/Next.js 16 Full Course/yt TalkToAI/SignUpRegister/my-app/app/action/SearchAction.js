"use server";

import dbconnect from "../db/dbconnect";
import Product from "../model/ProductModel";

const fetchProductsSearch = async (query = "") => {
  await dbconnect();

  const products = await Product.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { category: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
    ],
  }).lean();

  return products.map((product) => ({
    _id: product._id.toString(),
    name: product.name,
    category: product.category,
    description: product.description,
    price: product.price,
    image: product.image.toString(),
    stock: product.stock,
  }));
};

const SearchBar = async (query) => {
  const filteredProducts = await fetchProductsSearch(query);
  return filteredProducts;
};

export default SearchBar;
