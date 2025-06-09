import { hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js';

const registerController = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // validation
        if(!name) {
            return res.status(400).send({
                success: false,
                message: 'name is required'
            });
        }
        if(!email) {
            return res.status(400).send({
                success: false,
                message: 'email is required'
            });
        }
        if(!password || password.length < 6) {
            return res.status(400).send({
                success: false,
                message: 'password is required and 6 characters long'
            });
        }

        // checking existing user
        const existingUser = await userModel.findOne({email});
        if(existingUser) {
            return res.status(500).send({
                success: false,
                message: 'A user already registered with this email'
            })
        }

        // hashing
        const hashedPassword = await hashPassword(password);

        // save user
        const user =  await userModel({name, email, password: hashedPassword}).save();

        return res.status(201).send({
            success: true,
            message: 'Registration Successful please login'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in Register API',
            error,
        });
    }
};

export { registerController };