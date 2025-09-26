import { model, Schema } from "mongoose";
import { categoryData } from "./category.interface";

const categorySchema = new Schema<categoryData>({

  categoryID: { type: Number, required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  icon: { type: String, required: true },

});

export const Category = model<categoryData>("Category", categorySchema);

