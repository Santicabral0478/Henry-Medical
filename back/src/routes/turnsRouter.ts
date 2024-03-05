import { Router } from "express";
import { createTurns, getTurns, getTurnById, cancelTurn} from "../controllers/turnsController";
const router: Router = Router();

// required functions...
router.get("/turns/:id", getTurnById);
router.post("/turns/schedule", createTurns)
router.put("/turns/cancel/:id", cancelTurn); // Nueva ruta para cancelar un turno
router.get("/turns", getTurns)

export default router;