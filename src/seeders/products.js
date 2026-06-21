import connectDB from "../lib/mongodb.js";
import Product from "../models/Product.js";

const PRODUCTS_URL = "https://dummyjson.com/products?limit=0";

export function mapProductForDb(item) {
  return {
    productId: item.id,
    title: item.title,
    description: item.description,
    brand: item.brand,
    price: item.price,
    rating: item.rating,
    thumbnail: item.thumbnail,
  };
}

export async function fetchProductSeedData() {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products from dummyjson.com");
  }

  const data = await response.json();
  return data.products.map(mapProductForDb);
}

export async function seedProducts({ force = false } = {}) {
  await connectDB();

  const existingCount = await Product.countDocuments();

  if (existingCount > 0 && !force) {
    return {
      inserted: 0,
      skipped: true,
      total: existingCount,
    };
  }

  if (force && existingCount > 0) {
    await Product.deleteMany({});
  }

  const products = await fetchProductSeedData();
  await Product.insertMany(products);

  return {
    inserted: products.length,
    skipped: false,
    total: products.length,
  };
}
