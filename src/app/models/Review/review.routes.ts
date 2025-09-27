import express from "express";
import { reviewController } from "./review.controller";

const router = express.Router();

// /api/reviews
router.get("/", reviewController.getAllReviewController);

export const reviewRoutes = router;
