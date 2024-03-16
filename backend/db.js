import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sajalsksk1jan:qyYi9KcPmNFnFrXA@cluster0.eqqnbob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    });
    console.log("Connected to Database Successfully");
  } catch (err) {
    console.error(err);
    console.log("Failure Detected in Connection to Database");
  }
};

export default connectDB;
