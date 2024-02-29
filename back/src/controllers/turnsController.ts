import { Request, Response } from "express";

export const getAllTurns = (req: Request, res: Response) => {
  res.send("*-Obteniendo todos los turnos Registrados correctamente-*"); };

export const getTurnById = (req: Request, res: Response) => {
  const turnId = req.params.id;
  res.send(`*-Obteniendo un turno por id especifico: ${turnId}-*`); };

export const createTurn = (req: Request, res: Response) => {
  res.send("*-Crear un nuevo turno-*"); };

export const cancelTurn = (req: Request, res: Response) => {
  const turnId = req.params.id;
  res.send(`*-Cancelando un turno determinado ${turnId}-*`); };
