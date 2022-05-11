import express from 'express';

import login from "../../controllers/loginController.js"

import authLogin from '../../middlewares/authLogin.js';

const signInRouter = express.Router();

signInRouter.post('/login',authLogin,login);

export default signInRouter;