import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js';
import JWT from 'jsonwebtoken';

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

const loginController = async(req, res) => {
    try {
        const {email, password} = req.body;

        // validation
        if(!email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Please provide email or password'
            });
        }

        // find user
        const user = await userModel.findOne({email});
        if(!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            });
        }

        // token JWT
        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        // match password
        const match = await comparePassword(password, user.password);
        if(!match) {
            return res.status(401).send({
                success: false,
                message: 'Invalid user or password'
            });
        }

        // hiding password in response
        user.password = undefined;

        res.status(200).send({
            successs: true,
            message: 'Login successfully',
            token,
            user,
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in login api',
            error,
        })
    }
};

export { registerController, loginController };