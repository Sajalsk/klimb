import mongoose from 'mongoose';

const mongoURI = "mongodb+srv://sajalsksk1jan:qyYi9KcPmNFnFrXA@cluster0.eqqnbob.mongodb.net/klimb?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", false);

const connectMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected to MongoDB Successfully");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error.message);
        });
};

export default connectMongo;
