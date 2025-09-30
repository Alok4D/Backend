import { Request, Response } from "express";
import { categoryServices } from "./Category.services";


// GET all categories
const getAllCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await categoryServices.getAllCategories();
    res.status(200).json({ success: true, data: categories });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET single category
const getCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await categoryServices.getCategoryById(req.params.id);
    if(!category) return res.status(404).json({ success: false, message: "Category not found" });
    res.status(200).json({ success: true, data: category });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// CREATE category
const createCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await categoryServices.createCategory(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE category
const updateCategoryController = async (req: Request, res: Response) => {
  try {
    const updatedCategory = await categoryServices.updateCategory(req.params.id, req.body);
    if(!updatedCategory) return res.status(404).json({ success: false, message: "Category not found" });
    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE category
const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const deletedCategory = await categoryServices.deleteCategory(req.params.id);
    if(!deletedCategory) return res.status(404).json({ success: false, message: "Category not found" });
    res.status(200).json({ success: true, data: deletedCategory });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const CategoryController = {
  getAllCategoriesController,
  getCategoryController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController
};
