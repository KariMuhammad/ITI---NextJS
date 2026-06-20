import Product from "@/models/Product";

function toProductDoc(item) {
  return {
    productId: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
    rating: item.rating,
    brand: item.brand,
    thumbnail: item.thumbnail,
  };
}

export function serializeProduct(doc) {
  return {
    id: doc.productId,
    title: doc.title,
    description: doc.description,
    price: doc.price,
    rating: doc.rating,
    brand: doc.brand,
    thumbnail: doc.thumbnail,
  };
}

export async function seedProductsIfEmpty() {
  const count = await Product.countDocuments();

  if (count > 0) {
    return false;
  }

  const response = await fetch("https://dummyjson.com/products?limit=0");
  const data = await response.json();

  await Product.insertMany(data.products.map(toProductDoc));
  return true;
}
