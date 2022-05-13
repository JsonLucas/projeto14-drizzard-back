import { getUser,setSession } from "../database/actions.js";
import bcrypt from "bcrypt";
import { v4 as uuid} from "uuid";

export default async function login (req, res) {
    const user = res.locals.body;
    const hasUser = await getUser({ email: user.email });
    
    if (hasUser) {
        if(bcrypt.compareSync(user.password, hasUser.password)){
            const token = uuid();
            const session = { userId: hasUser._id, name: user.name ,token: token };
            setSession(session);
            res.send({ name: hasUser.name, token: token });    
        }else{
            res.status(401).send("senha incorreta")
        }
    } else {
        res.status(404).send("usuário não cadastrado");
    };
};