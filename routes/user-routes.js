import express from 'express';
import {userController} from '../controllers/user-controller.js';
 export const userRoutes = express.Router();
 userRoutes.get('/profile/:username', userController.profile);//read
 userRoutes.post('/login',userController.login);
 userRoutes.post('/register',userController.register);//insertionuserRoutes.post('/changepassword',userController.changepassword);
 userRoutes.get ('/search/:key',userController.search);
 //shoe 
 
 userRoutes.post('/shoes', userController.shoes);
 userRoutes.get('/shoes/get', userController.getShoes);
 // route end 

 // userRoutes.put('/change-password')//updation
 //userRoutes.delete('/remove-account');//deletion

 //start
 
