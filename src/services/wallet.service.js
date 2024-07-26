import User from '../models/user.model.js';
import Wallet from '../models/wallet.models.js';
import { Types,isValidObjectId } from 'mongoose';
import { ErrorWithStatus } from '../exception/error.js';



export const getAllWallet = async() => {
    return Wallet.find().populate("user")
}

export const create = async(userId) => {
    if(!isValidObjectId){
        throw new ErrorWithStatus("not valid userId",400)
    }

    const user = await User.findOne({userId})
    if(!user){
        throw new ErrorWithStatus("user not found",401)
    }
    const existingWallet = await Wallet.findOne({
        user: new Types.ObjectId(userId)
    })
    if(existingWallet){
        throw new ErrorWithStatus("wallet account already exist",400)

    }
    return Wallet.create({user: new Types.ObjectId(userId)})
}

export const getOneWallet =async(walletId) =>{
    return await Wallet.findOne({_id: new Types.ObjectId(walletId)})
}



export const tranfer = async(sourceid,destinationId,amount) => {
    const sourceWallet = await Wallet.findOne({_id: new Types.ObjectId(sourceid)})
    const destinationWallet = await Wallet.findOne({_id: new Types.ObjectId(destinationId)})
    if(sourceWallet.balance < amount){
        throw new ErrorWithStatus("insufficient",400)
    }
    sourceWallet.balance -= Number(amount);
    destinationWallet.balance  += Number(amount)

    await sourceWallet.save()
    await destinationWallet.save()

    return {sourceWallet,destinationWallet, amount}
}