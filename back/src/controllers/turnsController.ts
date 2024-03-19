import{Request, Response} from "express";
import{createTurnService, getTurnsService, getTurnByIdService, cancelTurnService} from "../services/turnsService"
import { Turn } from "../entities/Turn";
import TurnDto from "../dto/TurnDto";

// :::get specific turn:::
export const getTurnById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const turn: Turn | null = await getTurnByIdService(Number(id));
        if (turn) {
            return res.status(200).json({
                ...turn
            });
        } else {
            return res.status(404).json({ message: "Turn not found" });
        }
    } catch (error) {
        console.error("Error retrieving turn by ID:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// :::register a turn:::
export const createTurns = async (req: Request, res: Response) => {
    try {
        const { date, time, userId, details } = req.body;

        // Creamos un nuevo turno con status "active"
        const newTurn: TurnDto = {
            date,
            time,
            userId,
            status: "active",
            details
        };

        // Llamar a la función de servicio para crear el turno
        const createdTurn = await createTurnService(newTurn);

        // Responder con el nuevo turno creado
        return res.status(201).json(createdTurn);
    } catch (error) {
        console.error("Error creating turn:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// :::cancel turn determined:::
export const cancelTurn = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Llamar a la función de servicio para cancelar el turno
        const cancelledTurn = await cancelTurnService(parseInt(id));

        if (cancelledTurn) {
            // Si el turno fue cancelado, responder con estado 200
            return res.status(200).json({ message: "Turn cancelled successfully" });
        } else {
            // Si el turno no fue encontrado, responder con estado 404
            return res.status(404).json({ message: "Turn not found" });
        }
    } catch (error) {
        console.error("Error cancelling turn:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// :::get all turns:::
export const getTurns = async (req: Request, res: Response) => {
    try {
        const turns = await getTurnsService();
        return res.status(200).json(turns);
    } catch (error) {
        console.error("Error retrieving turns:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};