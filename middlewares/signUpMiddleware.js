import { getUser } from "../database/actions.js";

const signUpMiddleware = async (req, res, next) => {
    const email = req.body.email;
    try{
        const get = await getUser({email});
        if(get){
            return res.status(409).send('este usuário já está cadastrado.');
        }
        next();
    }catch(e){
        console.log(e.message);
        return res.sendStatus(500);
    }
}

export default signUpMiddleware;