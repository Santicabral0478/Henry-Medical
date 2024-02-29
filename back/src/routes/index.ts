import { Router } from "express";
import turnsRouter from "./turnsRouter";
import usersRouter from "./usersRouter";

const router: Router = Router();

router.use(turnsRouter);
router.use(usersRouter);

export default router;
