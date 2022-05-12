import dbConnection from "../database/dbConnection.js";

const dbConnectMiddleware = async (req, res, next) => {
    try{
        await dbConnection();
        next();
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default dbConnectMiddleware;