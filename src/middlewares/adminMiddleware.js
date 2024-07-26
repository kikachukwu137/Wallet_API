

export const  adminMidddleware = (req,res,next)=>{
    console.log("admin middleware")
    if(req?.user?.role !== "ADMIN"){
        
    console.log( "12",req?.user?.role)

        return res.status(403).json({message: "access denied not authorized asked Daniel"})
        

    }
    console.log( "12",req?.user?.role)

    next();

} 