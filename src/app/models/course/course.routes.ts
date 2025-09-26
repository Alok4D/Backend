import express from "express";
import { courseController } from "./course.controller";

const router = express.Router();

// /api/courses/create-course
router.post('/create-course', courseController.creteCourse)

// /api/courses
router.get('/', courseController.getAllCoursesController)

// /api/courses/:id
router.put('/:id', courseController.getAllCoursesController)

// /api/courses/:id
router.delete('/:id', courseController.getAllCoursesController)

export const courseRoutes = router;