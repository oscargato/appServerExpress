import { Router } from 'express';
import { validateToken } from '../middlewares/validate-token';
import { newUser, 
         loginUser, 
         getUser, 
         getUsers, 
         updateUser, 
         deleteUser } from '../controllers/user.Controller';

const routesUser = Router();

routesUser.post('/login', loginUser)  
routesUser.post('/new', newUser) 
routesUser.get('/user/:id', validateToken, getUser) 
routesUser.get('/all', validateToken, getUsers) 
routesUser.put("/:id", validateToken, updateUser); 
routesUser.delete("/:id", validateToken, deleteUser); 

export { routesUser } 