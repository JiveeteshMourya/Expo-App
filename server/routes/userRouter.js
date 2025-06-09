import express from 'express';
import { registerController, loginController } from '../controllers/userController.js';

// router object
const router = express.Router();

// routes
router.post('/register', registerController)
router.post('/login', loginController);

// exports
export default router;