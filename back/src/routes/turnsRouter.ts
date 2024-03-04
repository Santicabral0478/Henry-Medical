import { Router } from "express";
import { createTurns, getTurns } from "../controllers/turnsController";

const router: Router = Router();

router.post("/turns/register", createTurns)

router.get("/turns", getTurns)

export default router;