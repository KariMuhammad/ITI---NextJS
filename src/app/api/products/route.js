import Product from "@/models/Product";
import { ensureProducts, formatProduct } from "@/lib/products";

export async function GET() {
  try {
    await ensureProducts();

    const products = await Product.find().sort({ productId: 1 });
    return Response.json(products.map(formatProduct));
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch products", error: error.message },
      { status: 500 }
    );
  }
}
