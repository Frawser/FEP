import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import { User } from '../types/types';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export interface RequestWithUser extends Request {
  user?: User;
}

export const generateToken = (user: User) => {
  if (!secretKey) {
    console.error('No secret key');
    process.exit(1);
  }

  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    secretKey,
    { expiresIn: '7d' }
  );
};

export const verifyToken = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!secretKey) {
      console.error('No secret key');
      return res.status(500).json('Server error');
    }

    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(403).json('You are not authorized');
    }

    const decoded = jwt.verify(token, secretKey) as User;
    req.user = decoded;
    next();
} catch (error) {
    console.error(error);

    if ((error as jwt.JsonWebTokenError).name === 'TokenExpiredError') {
        return res.status(401).json('Token has expired');
    }

    return res.status(401).json('Invalid token');
}
};


