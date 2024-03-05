import { TurnModel, UserModel } from "../config/data-source";
import TurnDto from "../dto/TurnDto";
import { Turn } from "../entities/Turn";

export const getTurnByIdService = async (id: number): Promise<Turn | null> => {
    try {
        const turn: Turn | null = await TurnModel.findOne({
            where: { id },
            relations: ["user"]
        });
        return turn;
    } catch (error) {
        console.error("Error retrieving user by ID:", error);
        throw new Error("Error retrieving user by ID");
    }
};

export const createTurnService = async (turn: TurnDto): Promise<Turn> => {
    try {
        const newTurn = await TurnModel.create({
            ...turn,
            status: "active"
        });

        await TurnModel.save(newTurn);

        if (turn.userId) {
            const user = await UserModel.findOne({
                where: { id: turn.userId }
            });
            if (user) {
                newTurn.user = user;
                await TurnModel.save(newTurn);
            }
        }

        return newTurn;
    } catch (error) {
        console.error("Error creating turn:", error);
        throw new Error("Error creating turn");
    }
};

export const cancelTurnService = async (id: number): Promise<boolean> => {
    try {
        const turn = await TurnModel.findOne({where: {id}});

        if (turn) {
            turn.status = "cancelled";
            await TurnModel.save(turn);
            return true; 
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error cancelling turn:", error);
        throw new Error("Error cancelling turn");
    }
};

export const getTurnsService = async (): Promise<Turn[]> =>{
    const turns = await TurnModel.find();
    return turns;
}