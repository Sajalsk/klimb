import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error('MongoDB URI is not provided in the environment variables.');
        }

        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
