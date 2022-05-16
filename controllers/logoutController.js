import { deleteSession } from "../database/actions.js";

const logoutController = async (req, res) => {
    try{
        const { userId } = res.locals.body;
        const request = await deleteSession({userId});
        if(request){
            res.status(200).send('logout efetuado.');
        }else{
            res.status(400).send('falha ao fazer logout');
        }
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default logoutController;