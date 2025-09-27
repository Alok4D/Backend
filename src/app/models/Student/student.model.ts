import { model, Schema } from "mongoose";
import { studentData } from "./student.interface";

const studentSchema = new Schema<studentData>({
  studentId: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  address: { type: String, required: true },
  guardian: { type: String, required: true },
  profileImg: { type: String, required: true },
  courseName: { type: String, required: true },
});

export const Student = model<studentData>("Student", studentSchema);
