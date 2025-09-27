import { model, Schema } from "mongoose";
import { Admin } from "./admin.interface";

const adminSchema = new Schema<Admin>({
  adminId: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  contactNo: { type: String, required: true },
  emergencyContact: { type: String },
  address: { type: String },
  profileImg: { type: String },
  status: {
    type: String,
    enum: ["active", "inactive", "pending"],
    default: "pending",
  },
  managementDepartment: { type: String, required: true },
});

export const admin = model<Admin>("admin", adminSchema);