import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: String,
    price: Number,
    rating: Number,
    brand: String,
    thumbnail: String,
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
