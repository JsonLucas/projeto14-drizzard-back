import { Router } from 'express';
import { getGamesController, getSingleGameController } from '../../controllers/getGamesController.js';

const gamesRoute = Router();
gamesRoute.get('/games', getGamesController);
gamesRoute.get('/single-game', getSingleGameController);

export default gamesRoute;