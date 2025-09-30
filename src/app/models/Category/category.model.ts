import { Schema, model } from "mongoose";
import { ICategory } from "./Category.interface";



const categorySchema = new Schema<ICategory>({
  id: { type: Number }, 
  name: { type: String, required: true },
  count: { type: Number, default: 0 },
  icon: { type: String, default: "" },
  isActive: { type: Boolean, default: true },
}, 
{ timestamps: true }

);

export const Category = model<ICategory>("Category", categorySchema);
