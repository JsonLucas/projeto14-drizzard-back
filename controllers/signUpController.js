import { setUser } from "../database/actions.js";

const signUpController = async (req, res) => {
    try{
        await setUser({...req.body});
        res.status(201).send('usuario cadastrado.');
    }catch(e){
        console.log(e.message);
        return res.status(500).send('internal error');
    }
}

export default signUpController;