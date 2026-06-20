import { getProductById } from "@/lib/products";

export async function GET(_request, { params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }

  return Response.json(product);
}
