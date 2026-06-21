import { getAllProducts } from "@/lib/products";

export async function GET() {
  try {
    const products = await getAllProducts();
    return Response.json(products);
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch products", error: error.message },
      { status: 500 }
    );
  }
}
