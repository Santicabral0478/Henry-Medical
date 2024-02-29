// GET /users => obtener todos los usuarios
// GET /users/:id => Obtener a un usuario por ID

//POST /user/register => Crear un nuevo usuario

import { Router } from "express";
import { getAllUsers, getUserById, createUser } from "../controllers/usersController";

const router: Router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/user/register", createUser);

export default router;
