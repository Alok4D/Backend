import { Student } from "./student.model"

const getAllStudentServices = async ()  => {
    const student = await Student.find();
    return student;
}
export const studentServices = {
    getAllStudentServices,
}