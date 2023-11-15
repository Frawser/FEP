import { Router } from 'express';
import userModel from '../models/userModel';
import { verifyToken } from '../middleware/verifyToken';

const router = Router();

router.post('/register', userModel.registerUser);   //POST - Register a new user & recieve a token- /api/users/register
router.post('/login', userModel.loginUser);   //POST - Login a user & recieve a token- /api/users/login
router.get('/me', verifyToken, userModel.getUserData);   //GET - gives userinfo - /api/users/me

// POST example
// {
//   "email": "test@test.com",
//   "password": "Password123!"
// }

export default router;