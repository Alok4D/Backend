import  express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

// /api/categorys
router.get('/', categoryController.getAllCategoryController)

export const categoryRoutes = router;
