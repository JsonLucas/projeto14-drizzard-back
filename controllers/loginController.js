import { getUser,setSession } from "../database/actions.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export default async function login (req, res) {
    const user = res.locals.body;
    const hasUser = await getUser({ email: user.email });
    
    if (hasUser) {
        if(bcrypt.compareSync(user.password, hasUser.password)){
            const jwtKey = process.env.JWT_SECRET;
            const session = { userId: hasUser._id, name: hasUser.name, email: hasUser.email };
            const token = jwt.sign(session, jwtKey);
            console.log(session)
            setSession({...session,token});
            res.send({ name: hasUser.name, token: token });    
        }else{
            res.status(401).send("senha incorreta")
        }
    } else {
        res.status(404).send("usuário não cadastrado");
    };
};