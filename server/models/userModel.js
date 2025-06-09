import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add name'],
        trim: true,
    },
    email: {
        type: String,
        rquired: [true, 'please add email'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'please add password'],
        min: 6,
        max: 64,
    },
    role: {
        type: String,
        default: 'user'
    },
}, {timestamps: true});

const userModel = mongoose.model('User', userSchema);

export default userModel;