import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import { Booking } from '../types/types';


const bookingSchema: Schema<Booking> = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: String, required: true },
  // Add other properties as needed
});

const BookingModel = mongoose.model<Booking>('Booking', bookingSchema);

export default BookingModel;
