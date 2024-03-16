import express from 'express';
import connectDB from './db.js';
import uploadRoutes from './routes/uploadRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

const corsOptions = {
  origin: "https://klimb-frontend.vercel.app",
  method:["POST","GET"],
  credentials: true,
};

connectDB();

app.use(express.json());
app.use(cors(corsOptions)); 

app.use('/upload', uploadRoutes);

app.get("/",(req,res)=>{
    res.send("Postman is working in Excel backend");
  });

app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});
