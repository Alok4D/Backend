import  express  from "express";
import { studentController } from "./student.controller";
const router= express.Router();


// /api/students
router.get('/', studentController.getAllStudentsController)



export const studentRoutes = router;