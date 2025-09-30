import { ICategory } from "./Category.interface";
import { Category } from "./Category.model";



// GET all categories
const getAllCategories = async (): Promise<ICategory[]> => await Category.find();

// GET single category by ID
const getCategoryById = async (id: string): Promise<ICategory | null> => await Category.findById(id);

// CREATE new category
const createCategory = async (payload: ICategory): Promise<ICategory> => new Category(payload).save();

// UPDATE category by ID
const updateCategory = async (id: string, updateData: Partial<ICategory>): Promise<ICategory | null> =>
  await Category.findByIdAndUpdate(id, updateData, { new: true });

// DELETE category by ID
const deleteCategory = async (id: string): Promise<ICategory | null> => await Category.findByIdAndDelete(id);

export const categoryServices = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
