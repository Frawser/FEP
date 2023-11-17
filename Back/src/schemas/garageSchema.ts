import mongoose, { Schema } from "mongoose";


const garageSchema = new Schema({
  homeOwnerName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  garageType: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  city: { type: String, required: true },
});

export default mongoose.model("Garage", garageSchema);

