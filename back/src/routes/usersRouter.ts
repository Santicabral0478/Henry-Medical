// usersRouter.ts
import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController";

const router: Router = Router();

router.post("/users/register", createUser);
router.get("/users", getUsers);

export default router;
