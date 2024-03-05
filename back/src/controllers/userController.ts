import { Request, Response } from "express";
import { createUserService, getUsersService, getUserByIdService, loginUserService } from "../services/userService";
import { User } from "../entities/User";
import UserDto from "../dto/UserDto"; 
import CredentialDto from "../dto/CredentialDto";

// :::get a specific user:::
export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user: User | null = await getUserByIdService(Number(id));
        if (user) {
            return res.status(200).json({
                ...user, // Devolver todos los datos del usuario
                turns: user.turns // Incluir información de los turnos asociados al usuario
            });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error retrieving user by ID:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// :::user registration:::
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;

        const credentialData: CredentialDto = {
            username,
            password,
        }

        const userData: UserDto = {
            name,
            email,
            birthdate,
            nDni,
        };

        const newUser: User = await createUserService(userData, credentialData);

        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// :::user login:::
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await loginUserService(username, password);

        if (user) {
            res.status(200).json({
                login: true,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    birthdate: user.birthdate,
                    nDni: user.nDni
                }
            });
        } else {
            res.status(400).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// :::-EXTRA- get all users:::
export const getUsers = async (req: Request, res: Response) => {
    const users: User[] = await getUsersService();
    res.status(200).json(users);
};
