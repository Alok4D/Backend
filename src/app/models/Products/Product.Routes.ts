import { Router } from "express";
import { ProductController } from "./Product.Controller";

const router = Router();

// /api/products
router.post("/", ProductController.createProductController);
router.get('/', ProductController.getAllProductController)
router.delete("/:id", ProductController.deleteProductController);
router.get('/:id', ProductController.getSingleProductController);
router.put("/:id", ProductController.updateProductController);

export const productsRoutes = router;
