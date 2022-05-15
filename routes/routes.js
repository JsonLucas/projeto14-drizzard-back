import { Router } from "express"
import gamesRoute from "./gamesRoute/gamesRoute.js";
import signInRouter from "./loginRoutes/signInRoute.js";
import signUpRouter from "./signUpRoute/signUpRoute.js";

const router = Router();
router.use(signInRouter);
router.use(signUpRouter);
router.use(gamesRoute);

export default router;