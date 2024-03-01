// controllers/userControllers.ts
import { Request, Response } from "express";
import { userService } from "../services/userService";

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.status(200).json(users);
};

export const getUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = userService.getUserById(userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const createUser = (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  userService.createUser(name, email, birthdate, nDni, username, password);
  res.status(201).json({ message: "User created successfully" });
};
