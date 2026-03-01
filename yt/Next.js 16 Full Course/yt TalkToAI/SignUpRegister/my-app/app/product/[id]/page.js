import fetchProduct from "../../action";
import ProductAddCart from "./ProductAddCart";


export default async function ProductPage({ params }) {
  const { id } = await params;

  try {
    const product = await fetchProduct(id);
    if (!product) {
      return <div>Product not found</div>;
    }

    return <ProductAddCart product={product} />;
  } catch (error) {
    console.log(error);
    return <div>Product not found : {error.message}</div>;
  }
}
