import ProductsList from "@/components/ProductsList";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=0", {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  const products = await getProducts();
  const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))];

  return <ProductsList products={products} brands={brands} />;
}
