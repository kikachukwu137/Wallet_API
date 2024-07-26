import jwt from 'jsonwebtoken';

export const authenticationMiddleware = (req,res,next) => {
    const authorization = req.headers.authorization
    if(!authorization){
        return res.status(401).json({message: "unauthorized"})
    }

    const token = authorization.split(" ")
    if(token.length !== 2){
        return res.status(401).json({message: "bad authorization"})
    }

    jwt.verify(token[1],process.env.JWT_SECRET,(err,decoded) => {
        if(err){
            return res.status(401).json({message: "access denied"})
        }
        console.log("decoded", decoded)
        req.user = decoded
        next()
    })

}