import app from "./app"; 
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 

dotenv.config();

const PORT = process.env.PORT || 9999; 
app.listen(PORT, () => console.log("Server running at http://localhost:" + PORT)); 

if (!process.env.MONGODB_URI) {
  console.error('MONGO_URI not defined in environment');
  process.exit(1);
}

mongoose
    .connect(process.env.MONGODB_URI) //connects the database to MONGO_URI from env from the process
    .then(() => console.log("connected to DB")) 
    .catch((err: Error) => console.log(err.message)); 