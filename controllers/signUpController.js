import { setUser } from "../database/actions.js";
import bcrypt from 'bcrypt'

const signUpController = async (req, res) => {
    try{
        const body = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        };
        await setUser(body);
        res.status(201).send('usuario cadastrado.');
    }catch(e){
        console.log(e.message);
        return res.status(500).send('internal error');
    }
}

export default signUpController;