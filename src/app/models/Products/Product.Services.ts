
import { Product } from './Product.model';
import { IProduct } from './Product.Interface';

const createProduct = async(payload: IProduct) => {
    const result = await Product.create(payload);
    return result;
}

const getAllProduct = async() => {
    const product = await Product.find();
    return product;
}


const deleteProduct = async (id: string) => {
  try {
    const result = await Product.findByIdAndDelete(id);
    return result; 
  } catch (error) {
    throw new Error(`Could not delete product: ${error}`);
  }
};

const getSingleProduct = async (id: string)  => {
    const product = await Product.find({_id:id});
    return product; 
}

// update product
const updateProduct = async (id: string, updateData: Partial<IProduct>) => {
    
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
    return updatedProduct; 

};


export const productServices = {
    createProduct,
    getAllProduct,
    deleteProduct, 
    getSingleProduct,
    updateProduct
}


