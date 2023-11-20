import mongoose, { Schema } from "mongoose";


const garageSchema = new Schema({
  garageOwnerName: { type: String, required: true },
  adress: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  garageType: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  city: { type: String, required: true },
});

export default mongoose.model("Garage", garageSchema);

