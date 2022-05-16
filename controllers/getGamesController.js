import { getGames, getSingleGame } from "../database/actions.js";

export const getGamesController = async (req, res) => {
    try{
        const response = await getGames();
        res.status(200).send(response);
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export const getSingleGameController = async (req, res) => {
    try{
        const { _id } = req.headers;
        const response = await getSingleGame({_id});
        if(response){
            res.status(200).send(response);
        }else{
            res.status(404).send('jogo não encontrado.');
        }
        return;
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.')
    }
}