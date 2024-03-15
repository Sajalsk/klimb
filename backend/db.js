import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongoURI = 'mongodb+srv://sajalsksk1jan:qyYi9KcPmNFnFrXA@cluster0.eqqnbob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
