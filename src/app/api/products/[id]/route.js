import { getProductById } from "@/lib/products";

export async function GET(_request, { params }) {
  try {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
      return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch product", error: error.message },
      { status: 500 }
    );
  }
}
