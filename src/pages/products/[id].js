import Link from "next/link";

export default function ProductPage({ product }) {
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

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=0");
  const data = await res.json();

  const paths = data.products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}
