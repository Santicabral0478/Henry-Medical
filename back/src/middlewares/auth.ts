import { NextFunction, Request, Response } from "express";

const auth = (req:Request, res:Response, next: NextFunction)=>{
    const {token} = req.headers
        if(token === "autenticado"){
            next()
        } else {
            res.status(400).json({message: `Error!. <<Acceso no autorizado>>`})
        }
}

export default auth;