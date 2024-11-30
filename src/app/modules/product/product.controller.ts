import { Request, Response } from "express";
import { ProductService } from "./product.service";


const createProduct = async (req: Request, res: Response ) => {
    try{
       
        const {product : productData} = req.body

        const result = await ProductService.createProductIntoDB(productData)
        

        res.status(200).json({
            message: "Bicycle created successfully",
            success: true,
            data: result
        })
       
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            data: error
        
        
    })
}
    
}
const getAllProduct = async (req: Request, res: Response ) => {
    try{
       

        const result = await ProductService.getAllProductFromDB()
        

        res.status(200).json({
            message: "Bicycles retrieved successfully",
            success: true,
            data: result
        })
       
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            data: error
        
        
    })
}
    
}

export const ProductController = {
    createProduct,
    getAllProduct 
}