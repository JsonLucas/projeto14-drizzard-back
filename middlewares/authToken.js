import jwt from 'jsonwebtoken';

export default async function authToken(req, res, next) {
    const {token} = req.headers;
    const jwtKey = process.env.JWT_SECRET;

    if(token){
        try {
            const verify = jwt.verify(token, jwtKey);
            res.locals.body = verify;
            next();
        } catch {
            res.status(498).send("token inválido");
            return;
        }  
    }else{
        res.status(401).send("token nescessário");
        return;
    };
};
