import  express  from "express";
import { mentorController } from "./mentor.controller";

const router = express.Router();

// /api/metors/createMentor
router.get('/', mentorController.getAllMentorsController);
router.post('/createMentor', mentorController.createMentor);

export const mentorRoutes = router;