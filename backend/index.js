import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.use(express.json()); // allows up to parse incoming reqests:req.body

app.use("/api/auth", authRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})
