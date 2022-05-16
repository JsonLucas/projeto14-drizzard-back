import { Router } from "express"
import gamesRoute from "./gamesRoute/gamesRoute.js";
import signInRouter from "./loginRoutes/signInRoute.js";
import logoutRoute from "./logoutRoute/logoutRoute.js";
import signUpRouter from "./signUpRoute/signUpRoute.js";
import searchRouter from "./searchRoute/searchRoute.js";
import orderRoute from "./orderRoute/orderRoute.js";

const router = Router();
router.use(signInRouter);
router.use(signUpRouter);
router.use(gamesRoute);
router.use(logoutRoute);
router.use(searchRouter);
router.use(orderRoute);

export default router;