import { Router } from 'express';
import userModel from '../models/userModel';
import { verifyToken } from '../middleware/verifyToken';

const router = Router();

router.post('/register', userModel.registerUser);   //POST - Register a new user & recieve a token- /data/users/register
router.post('/login', userModel.loginUser);   //POST - Login a user & recieve a token- /data/users/login
router.get('/me', verifyToken, userModel.getUserData);   //GET - gives userinfo - /data/users/me
router.get('/all', userModel.getAllUsers);   //GET - gives all users - /data/users/all

// POST example
// {
//   "email": "test@test.com",
//   "password": "Password123!"
// }

export default router;