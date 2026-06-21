import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function seedProductsIfEmpty() {
  const count = await Product.countDocuments();

  if (count > 0) {
    return;
  }

  const response = await fetch("https://dummyjson.com/products?limit=0");
  const data = await response.json();

  const products = data.products.map((item) => ({
    productId: item.id,
    title: item.title,
    description: item.description,
    brand: item.brand,
    price: item.price,
    rating: item.rating,
    thumbnail: item.thumbnail,
  }));

  await Product.insertMany(products);
}

export async function ensureProducts() {
  await connectDB();
  await seedProductsIfEmpty();
}

export function formatProduct(product) {
  return {
    id: product.productId,
    title: product.title,
    description: product.description,
    brand: product.brand,
    price: product.price,
    rating: product.rating,
    thumbnail: product.thumbnail,
  };
}
