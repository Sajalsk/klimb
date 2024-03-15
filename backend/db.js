import mongoose from 'mongoose';
import dotenv from "dotenv";

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI ;
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
