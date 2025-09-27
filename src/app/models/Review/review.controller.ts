import { ReviewServices } from "./review.services";
import { Request, Response } from "express";
const getAllReviewController = async (req: Request, res: Response) => {
  try {
    const result = await ReviewServices.getAllReview();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server ERror",
      error,
    });
  }
};

export const reviewController = {
  getAllReviewController,
};
