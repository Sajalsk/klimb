import express from 'express';
import connectDB from './db.js';
import uploadRoutes from './routes/uploadRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

connectDB();

app.use(express.json());
app.use(cors()); 

app.use('/upload', uploadRoutes);

app.get("/",(req,res)=>{
    res.send("Postman is working in Excel backend");
  });

app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});
