import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to DB => ${mongoose.connection.host}`.bgCyan.white);
    } catch (err) {
        console.log(`error in DB connection => ${err}`.bgRed.white);
    }
}

export default connectDB;