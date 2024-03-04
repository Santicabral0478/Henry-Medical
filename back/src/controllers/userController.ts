import { Request, Response } from "express";
import { createUserService, getUsersService, getUserByIdService  } from "../services/userService";
import { User } from "../entities/User";

export const createUser = async(req: Request, res: Response) =>{
    const {
        name,
        email,
        birthdate,
        nDni,
        credentialsId,
    } = req.body;
    const newUser: User = await createUserService({
        name,
        email,
        birthdate,
        nDni,
        credentialsId,
    })
    res.status(201).json(newUser)
};

export const getUsers = async(req: Request, res:Response) =>{
    const users: User[] = await getUsersService();
    res.status(200).json(users)
};

export const getUserById = async(req: Request, res:Response) =>{
    const {id} = req.params;
    const user: User | null = await getUserByIdService(Number(id));
    res.status(200).json(user);
}
