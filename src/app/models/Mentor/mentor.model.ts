
import { model, Schema } from "mongoose";
import { mentorData } from "./mentor.interface";


const mentorSchema = new Schema<mentorData>({
  mentorId: { type: String, required: true},
  name: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  dateOfBirth: {type: String, required: true},
  email: {type: String, required: true},
  contactNo: {type: String, required: true},
  emergencyContact: {type: String, required: true},
  addrees: {type: String, required: true},
  profileImg: {type: String, required: true},
  designation: {type: String, required: true},
  departmentName: {type: String, required: true},
  specialized_area: {type: String, required: true},
  education_qualification:  { type: [String], required: true },
  workExperience:  { type: String, required: true },
  experienceYears: {type: String, required: true},
  experienceTrainedStudents: {type: String, required: true},
  reviews: {type: Number, required: true},
  bio: {type: String, required: true},
  lifeJounery: {type: String, required: true},
  
})
export const Mentors = model<mentorData>("Mentors", mentorSchema)
