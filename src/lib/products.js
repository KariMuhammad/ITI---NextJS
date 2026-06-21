import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";
import { seedProducts } from "@/seeders/products";

export async function ensureProducts() {
  await connectDB();
  await seedProducts();
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

export async function getAllProducts() {
  await ensureProducts();

  const products = await Product.find().sort({ productId: 1 });
  return products.map(formatProduct);
}

export async function getProductById(id) {
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    return null;
  }

  await ensureProducts();

  const product = await Product.findOne({ productId });

  if (!product) {
    return null;
  }

  return formatProduct(product);
}
