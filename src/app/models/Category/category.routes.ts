import { Router } from "express";
import { CategoryController } from "./Category.controller";


const router = Router();

// /api/categories
// GET all categories

router.get("/", CategoryController.getAllCategoriesController);

// GET single category
router.get("/:id", CategoryController.getCategoryController);

// CREATE category
router.post("/", CategoryController.createCategoryController);

// UPDATE category
router.put("/:id", CategoryController.updateCategoryController);

// DELETE category
router.delete("/:id", CategoryController.deleteCategoryController);

export const categoryRoute = router;
