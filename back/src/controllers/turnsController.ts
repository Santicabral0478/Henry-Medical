// controllers/turnControllers.ts
import { Request, Response } from "express";
import { appointmentService } from "../services/turnService";

export const getAllTurns = (req: Request, res: Response) => {
  const turns = appointmentService.getAllAppointments();
  res.status(200).json(turns);
};

export const getTurnById = (req: Request, res: Response) => {
  const turnId = parseInt(req.params.id);
  const turn = appointmentService.getAppointmentById(turnId);
  if (turn) {
    res.status(200).json(turn);
  } else {
    res.status(404).json({ message: "Turn not found" });
  }
};

export const createTurn = (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  appointmentService.createAppointment(date, time, userId);
  res.status(201).json({ message: "Turn created successfully" });
};

export const cancelTurn = (req: Request, res: Response) => {
  const turnId = parseInt(req.params.id);
  appointmentService.cancelAppointment(turnId);
  res.status(200).json({ message: "Turn cancelled successfully" });
};
