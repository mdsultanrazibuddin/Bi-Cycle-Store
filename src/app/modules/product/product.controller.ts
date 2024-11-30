import { Request, Response } from "express";
import { ProductService } from "../order/order.service";

const createProduct = async (req: Request, res: Response ) => {
    try{
       
        const {product : productData} = req.body

        const result = await ProductService.createProductIntoDB(productData)
        

        res.status(200).json({
            success: true,
            message: "Bicycle created successfully",
            data: result
        })
    }catch(error){
        // res.status(500).json({
        //     success: false,
        //     message: "Something Went Wrong",
        //     data: error
        console.log(error);
        
    // })
}
    
}

export const ProductController = {
    createProduct
}