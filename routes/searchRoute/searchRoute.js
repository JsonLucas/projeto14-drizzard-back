import { Router } from 'express';
import searchGamesController from '../../controllers/searchGamesController.js';

const searchRouter = Router();
searchRouter.get('/search', searchGamesController);

export default searchRouter;