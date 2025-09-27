import { Review } from "./review.model"

const getAllReview = async () => {
    const review = await Review.find();
    return review
}

export const ReviewServices = {
    getAllReview,
}