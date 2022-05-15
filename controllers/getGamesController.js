import { getGames } from "../database/actions.js";

const getGamesController = async (req, res) => {
    try{
        const response = await getGames();
        res.status(200).send(response);
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default getGamesController;