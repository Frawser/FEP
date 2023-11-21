import { Router } from 'express';
import userModel from '../models/userModel';


const router = Router();

router.post('/register', userModel.registerUser);   //POST - Register a new user - /data/users/register
router.post('/login', userModel.loginUser);   //POST - Login a user - /data/users/login
router.get('/me', userModel.getUserData);   //GET - gives userinfo - /data/users/me
router.get('/all', userModel.getAllUsers);   //GET - gives all users - /data/users/all

// POST example
// {
//   "username": "test",
//   "email": "test@test.com",
//   "password": "Password123!"
// }

export default router;