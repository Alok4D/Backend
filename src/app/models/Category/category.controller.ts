import { categoryServices } from "./category.services";
import { Request, Response } from "express";

const getAllCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await categoryServices.getAllCategory();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};
export const categoryController = {
    getAllCategoryController
}
