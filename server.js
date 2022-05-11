import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/routes.js"

const app = express();
app.use(json());
app.use(cors());
dotenv.config();

app.use(router);

app.listen(process.env.PORT,()=> {
    console.log("server running on port " + process.env.PORT);
});