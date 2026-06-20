import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";
import { seedProductsIfEmpty, serializeProduct } from "@/lib/seedProducts";

export async function getProducts() {
  await connectDB();
  await seedProductsIfEmpty();

  const products = await Product.find().sort({ productId: 1 }).lean();
  return products.map(serializeProduct);
}

export async function getProductById(id) {
  await connectDB();
  await seedProductsIfEmpty();

  const product = await Product.findOne({ productId: Number(id) }).lean();

  if (!product) {
    return null;
  }

  return serializeProduct(product);
}
