import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import connectDB from './config/db.js';
import router from './routes/userRouter.js';

// dotenv
dotenv.config();

// mdb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', router);

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgGreen.white);
})