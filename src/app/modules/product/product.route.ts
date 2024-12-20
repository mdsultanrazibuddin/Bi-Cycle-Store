import express  from "express";
import { ProductController } from "./product.controller";
const router = express.Router()

router.post('/create-product', ProductController.createProduct)
router.get('/', ProductController. getAllProduct )
router.get('/:productId', ProductController.getASpecificProduct )

export const ProductRoutes = router