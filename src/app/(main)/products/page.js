import ProductsList from "@/components/ProductsList";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getProducts();
  const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))];

  return <ProductsList products={products} brands={brands} />;
}
