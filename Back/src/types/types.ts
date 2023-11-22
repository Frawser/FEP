import { Document } from 'mongoose';
import { Request } from 'express';


export interface User extends Document {
    username: string;
    email: string;
    password: string;
}

export interface Garage {
    _id: string;
    garageType: string;
    adress: string;
    description: string;
    price: number;
    image: string;
  }


export interface RequestWithUser extends Request {
    user?: User;
  }





