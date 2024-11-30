import { model, Schema } from "mongoose";
import { Product } from "./product.interface";

const productSchema = new Schema<Product>({
    
    name : { type: String, required: true },
    brand : { type: String, required: true },
    price : { type: Number, required: true },
    type : { type: String, required: true },
    description :{ type: String},
    quantity : { type: Number },
    inStock : { type: Boolean},
  });


  export const ProductModel = model<Product>('Product', productSchema);