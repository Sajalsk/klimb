import express from 'express';
import connectDB from './db.js';
import uploadRoutes from './routes/uploadRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Add this line to enable CORS

// Routes
app.use('/upload', uploadRoutes);

app.get("/",(req,res)=>{
    res.send("Postman is working in Trackway backend");
  });
  

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});
