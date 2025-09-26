import { Request, Response } from "express";
import { courses } from "./course.services";

const getAllCoursesController = async (req: Request, res: Response) => {
  try {
    const result = await courses.getAllCourses();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

const creteCourse = async (req: Request, res: Response) => {
  const body = req.body;
//   console.log(body);
  const result = await courses.createCourse(body);

  res.status(201).json({
    success: true,
    message: "Course created successfully",
    data: result
  })
};

export const courseController = {
  getAllCoursesController,
  creteCourse,
};
