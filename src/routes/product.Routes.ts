import { Router } from 'express';
import { validateToken } from '../middlewares/validate-token';
import { newProduct, 
         getProduct,
         getProducts,
         updateProduct, 
         deleteProduct } from '../controllers/product.Controller';

const routesProduct = Router();

routesProduct.post('/new', newProduct) //Listo
routesProduct.get('/product/:id', validateToken, getProduct) //Listo
routesProduct.get('/all', validateToken, getProducts) //Listo
routesProduct.put("/:id", validateToken, updateProduct); //Listo
routesProduct.delete("/:id", validateToken, deleteProduct);//Listo

export { routesProduct }