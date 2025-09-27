
import { model, Schema } from "mongoose";
import { User } from "./user.interface";

const userSchema = new Schema<User>({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isPasswordChanged: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ["student", "mentor", "admin"],
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "blocked", "pending"],
    default: "pending",
  },
  isDeleted: { type: Boolean, default: false },
});

export const user = model<User>("user", userSchema);
