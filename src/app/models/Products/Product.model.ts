import { Schema, model } from "mongoose";
import { IProduct } from "./Product.Interface";


const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required:true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  images: { type: String, required: true },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  tags: { type: [String], default: [] },
  status: {
    type: String,
    enum: ["available", "out-of-stock", "discontinued"],
    default: "available"
  },
  brand: { type: String, required: true }
}, { timestamps: true }); 

export const Product = model<IProduct>("Product", productSchema);
