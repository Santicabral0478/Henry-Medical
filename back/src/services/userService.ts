import UserDto from "../dto/UserDto";
import { AppDataSource, UserModel } from "../config/data-source";
import { User } from "../entities/User";

export const createUserService = async(userData: UserDto) =>{
    const user = await UserModel.create(userData);
    const result = await UserModel.save(user);
    return user;
};

export const getUserByIdService = async(id:number): Promise<User|null>=>{
    const user = await UserModel.findOneBy({id});
    return user;
}


export const getUsersService = async(): Promise<User[]> =>{
    const users = await UserModel.find(
        {
            relations:{
                turns: true
            }
        }
    ); 
    return users;
};



