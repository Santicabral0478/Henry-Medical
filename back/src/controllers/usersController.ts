import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  res.send("*-Obtener a todos los usuarios registrados correctamente-*"); };

export const getUserById = (req: Request, res: Response) => {
  const userId = req.params.id;
  res.send(`*-Obtener un usuario especifico por su id: ${userId}-*`); };

export const createUser = (req: Request, res: Response) => {
  res.send("*-Crear un usuario nuevo-*"); };
