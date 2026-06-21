import Product from "@/models/Product";
import { ensureProducts, formatProduct } from "@/lib/products";

export async function GET(_request, { params }) {
  try {
    const { id } = await params;
    const productId = Number(id);

    if (Number.isNaN(productId)) {
      return Response.json({ message: "Invalid product id" }, { status: 400 });
    }

    await ensureProducts();

    const product = await Product.findOne({ productId });

    if (!product) {
      return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json(formatProduct(product));
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch product", error: error.message },
      { status: 500 }
    );
  }
}
