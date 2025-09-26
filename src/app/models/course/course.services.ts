import { ICourse } from "./course.interface";
import { Course } from "./course.model";

const getAllCourses = async () => {
  const courses = await Course.find();
  return courses;
};

const createCourse = async (payload: ICourse) => {
  const data = payload;
//   console.log(data)
  const result = await Course.create(data);
  return result;
};

export const courses = {
  getAllCourses,
  createCourse,
};
