import express, { json } from "express";
import 'dotenv/config.js';
import cors from "cors";

import router from "./routes/routes.js"
import dbConnectMiddleware from "./middlewares/dbConnectMiddleware.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(json());
app.use(cors());
app.use(dbConnectMiddleware);

app.use(router);

app.listen(port, ()=> {
    console.log("server running on port " + port);
});