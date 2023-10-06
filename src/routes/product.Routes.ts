import { Router } from 'express';
import { validateToken } from '../middlewares/validate-token';
import { newProduct, 
         getProduct,
         getProducts,
         updateProduct, 
         deleteProduct } from '../controllers/product.Controller';

const routesProduct = Router();

routesProduct.post('/new', newProduct);
routesProduct.get('/product/:id', validateToken, getProduct);
routesProduct.get('/all', validateToken, getProducts);
routesProduct.put("/:id", validateToken, updateProduct);
routesProduct.delete("/:id", validateToken, deleteProduct);

export { routesProduct }