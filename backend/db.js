import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file


const connectDB = async () => {
  
    try {
      await mongoose.connect(process.env.MONGO_URI , {
        // useNewUrlParser: "true",
        // useUnifiedTopology: "true"
       
      });  
      console.log("Connected to Database Successfully");
    } catch (err) {
      console.log(err);
      console.log("Failure Detected in Connection to Database");
    }
  };

export default connectDB;
