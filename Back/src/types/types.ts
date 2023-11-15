import { Document } from 'mongoose';
import { Request } from 'express';


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    bookings: any[]; 
}

export interface Garage {
    garageName: string,
    street: string,
    rooms: number,
}

export interface Booking extends Document {
    startDate: Date;
    endDate: Date;
    location: string;
}

export interface RequestWithUser extends Request {
    user?: User;
  }





