import  express  from "express";
import { mentorController } from "./mentor.controller";

const router = express.Router();

// /api/courses
router.get('/', mentorController.getAllMentorsController);

export const mentorRoutes = router;