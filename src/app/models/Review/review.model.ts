import { model, Schema } from "mongoose";
import { reviewData } from "./review.interface";

const reviewSchema = new Schema<reviewData>({
  reviewId: { type: String, required: true },
  title: { type: String, required: true },
  studentName: { type: String },
  studentImg: { type: String },
  description: { type: String },

  videoUrl: { type: String },
});
export const Review = model<reviewData>("Review", reviewSchema)

