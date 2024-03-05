import UserDto from "../dto/UserDto";
import { UserModel } from "../config/data-source";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import CredentialDto from "../dto/CredentialDto";


export const getUserByIdService = async (id: number): Promise<User | null> => {
    try {
        const user: User | null = await UserModel.findOne({
            where: { id }, relations:{ turns: true }
        });
        return user;
    } catch (error) {
        console.error("Error retrieving user by ID:", error);
        throw new Error("Error retrieving user by ID");
    }
};

export const createUserService = async (userData: UserDto, credentialData: CredentialDto): Promise<User> => {
    try {
        const user = new User();
        user.name = userData.name;
        user.email = userData.email;
        user.birthdate = userData.birthdate;
        user.nDni = userData.nDni;

        await UserModel.save(user);

        const credential = new Credential();
        credential.username = credentialData.username;
        credential.password = credentialData.password;

        user.credential = credential;

        await UserModel.manager.save(credential);

        await UserModel.manager.save(user);

        return user;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Error creating user");
    }
};

export const loginUserService = async (username: string, password: string): Promise<User | null> => {
    try {
        const user: User | null = await UserModel.findOne({
            where: { credential: { username, password } },
            relations: ["credential"]
        });

        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error logging in user:", error);
        throw new Error("Error logging in user");
    }
};

export const getUsersService = async(): Promise<User[]> =>{
    const users = await UserModel.find(
        {
            relations:{ turns: true }
        }
    ); 
    return users;
};