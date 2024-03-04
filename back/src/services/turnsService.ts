import { TurnModel, UserModel } from "../config/data-source";
import TurnDto from "../dto/TurnDto";
import { Turn } from "../entities/Turn";

export const getTurnsService = async (): Promise<Turn[]> =>{
    const turns = await TurnModel.find();
    return turns;
}

export const createTurnService = async (turn: TurnDto): Promise<Turn> =>{
    const newTurn = await TurnModel.create(turn);
    await TurnModel.save(newTurn);

    const user = await UserModel.findOne({
        where: {
            id: turn.userId
        }
    })

    if(user){
        newTurn.users = [user];
        await TurnModel.save(newTurn);
    }

    return newTurn;
}
