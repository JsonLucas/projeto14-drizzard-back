import { setOrder } from "../database/actions.js";

const getOrder = async (req, res) => {
    const data= new Date()
    try{
        const pedido = {
            pedido: req.body.pedido,
            localEnvio: req.body.localEnvio,
            dadosPagamento: req.body.dadosPagamento,
            createdAt: `${data.getDate()}/${data.getMonth()}`
        }
        console.log(pedido);
        await setOrder(pedido);
        res.status(201).send('pedido cadastrado.');
    }catch(e){
        console.log(e.message);
        return res.status(500).send('internal error');
    }
}

export default getOrder;