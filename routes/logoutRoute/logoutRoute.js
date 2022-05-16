import { Router } from "express";
import authToken from '../../middlewares/authToken.js';
import logoutController from '../../controllers/logoutController.js';

const logoutRoute = Router();
logoutRoute.delete('/logout', authToken, logoutController);

export default logoutRoute;