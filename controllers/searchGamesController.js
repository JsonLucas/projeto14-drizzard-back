import { searchGames } from "../database/actions.js";

const searchGamesController = async (req, res) => {
    try{
        const { query } = req.headers;
        const request = await searchGames({name: query});
        if((request) && (request.length > 0)){
            res.status(200).send(request);
        }else{
            res.status(404).send('não encontrado.');
        }
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default searchGamesController;