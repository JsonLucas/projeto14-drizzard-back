import { Router } from "express"

import signInRouter from "./loginRoutes/signInRoute.js";
import signUpRouter from "./signUpRoute/signUpRoute.js";

const router = Router();
router.use(signInRouter);
router.use(signUpRouter);

export default router;