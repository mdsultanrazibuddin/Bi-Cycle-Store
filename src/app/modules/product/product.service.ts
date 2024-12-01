import { Product } from "../product/product.interface";
import { ProductModel } from "../product/product.model";

const createProductIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product)
    return result
}
const getAllProductFromDB = async () => {
    const result = await ProductModel.find();
    return result;
}
const getASpecificProductFromDB = async () => {
    const result = await ProductModel.findOne();
    return result;
}

export const ProductService = {
    createProductIntoDB,
    getAllProductFromDB,
    getASpecificProductFromDB
}