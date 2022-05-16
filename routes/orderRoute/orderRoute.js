import { Router } from 'express';
import getOrder from '../../controllers/orderController.js';
import authToken from '../../middlewares/authToken.js';

const orderRoute = Router();
orderRoute.post('/order', authToken, getOrder);

export default orderRoute;