import ProductsList from "@/components/ProductsList";
import { getAllProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getAllProducts();
  const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))];

  return <ProductsList products={products} brands={brands} />;
}
