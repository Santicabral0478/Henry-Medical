// GET /turns => obtener todos los turnos
// GET /turns => obtener un turno por ID

// POST /turns/schedule => Crear un nuevo turno

// PUT /turns/cancel => Cancelar el turno especificado

import { Router } from "express";
import { getAllTurns, getTurnById, createTurn, cancelTurn } from "../controllers/turnsController";

const router: Router = Router();

router.get("/turns", getAllTurns);

router.get("/turns/:id", getTurnById);

router.post("/turns/createTurn", createTurn);

router.put("/turns/cancel/:id", cancelTurn);

export default router;
