import {Router} from 'express';
import  * as walletController from '../controllers/wallet.controller.js';
import { generateMiddleware } from '../middlewares/validation.middleware.js';

const walletRoute = Router()


walletRoute.get("/",walletController.getAllWallet)

walletRoute.get("/:walletId",walletController.getOneWallet)
walletRoute.post("/",walletController.create)
walletRoute.post("/transfer",generateMiddleware,walletController.transfer)

export default walletRoute