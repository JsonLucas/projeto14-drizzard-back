import { Router } from "express"

import signInRouter from "./loginRoutes/signInRoute.js";

const router = Router();
router.use(signInRouter);

export default router;