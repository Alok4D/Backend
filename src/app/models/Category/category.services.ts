import { Category } from "./category.model"

const getAllCategory = async () => {
    const category = await Category.find();
    return category;
}

export const categoryServices = {
    getAllCategory,
}