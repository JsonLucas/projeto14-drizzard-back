import { Router } from 'express';
import getGamesController from '../../controllers/getGamesController.js';

const gamesRoute = Router();
gamesRoute.get('/games', getGamesController);

export default gamesRoute;