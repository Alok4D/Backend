import { Request, Response } from "express";
import { productServices } from "./Product.Services";

// create product
const createProductController = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await productServices.createProduct(payload);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const getAllProductController = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProduct();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// DELETE product
const deleteProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await productServices.deleteProduct(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getSingleProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    // console.log(id)
    const product = await productServices.getSingleProduct(id);
    // console.log(product)
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// UPDATE product controller
const updateProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const updatedProduct = await productServices.updateProduct(id, updateData);

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const ProductController = {
  createProductController,
  getAllProductController,
  deleteProductController,
  getSingleProductController,
  updateProductController,
};
