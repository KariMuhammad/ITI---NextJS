import Link from "next/link";
import { notFound } from "next/navigation";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=0", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to load products");
  }

  const data = await res.json();
  return data.products;
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const products = await getProducts();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Link href="/products">← Back to products</Link>

      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width={300} />
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating}
      </p>
      <p>{product.description}</p>
    </div>
  );
}
