import { model, Schema } from "mongoose";
import { Product } from "./product.interface";

const productSchema = new Schema<Product>(
  
  {
    
    name : { type: String, required: true },
    brand : { type: String, required: true },
    price : { type: Number, required: true },
    type : { type: String, required: true },
    description :{ type: String},
    quantity : { type: Number },
    inStock : { type: Boolean},
    
  },
{
 
  timestamps: true,

  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v; // Remove the `__v` field
      return ret;
    },
  },
});


  export const ProductModel = model<Product>('Product', productSchema);