import{Request, Response} from "express";
import{createTurnService, getTurnsService} from "../services/turnsService"


export const getTurns = async (req:Request, res:Response) =>{
    const turns = await getTurnsService();
    return res.status(200).json(turns);
};

export const createTurns = async (req:Request, res:Response) =>{
    const {date, time, userId, status} = req.body;
    const newTurn = await createTurnService({
        date,
        time,
        userId,
        status,
    });
    return res.status(201).json(newTurn);
};