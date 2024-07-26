import * as walletService from '../services/wallet.service.js';


export  const transfer = async(req,res) =>{
    try{

    
    const {sourceId, destinationId, amount} = req.body;
    const transaction = await walletService.tranfer(sourceId,destinationId,amount);
    res.status(200).json({message: transaction })
    }
    catch(err){
        res.status(404).json({ message: err.message})
    }

}



export const getAllWallet = async(req,res) => {
    try {
        const wallets = await walletService.getAllWallet()
        res.json({data: wallets})
    } catch (error) {
        res.status(404).json({ message: error.message})

        
    }
}


export const create = async(req,res) => {
    try{
        const {userId} = req.body;
        const newWallet = await walletService.create(userId)
        res.json({data: newWallet})
    }
    catch(err){
        res.status(404).json({ message: err.message})
    }
}

export const getOneWallet = async(req,res) => {
    try {
        const {walletId} = req.params;
        const wallet = await walletService.getOneWallet(walletId);
        res.json({data: wallet})
    } catch (error) {
        res.status(404).json({ message: err.message})

        
    }

}