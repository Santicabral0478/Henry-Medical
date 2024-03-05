
import { Router } from "express";
import { createUser, getUsers, getUserById, loginUser } from "../controllers/userController";
const router: Router = Router();

// required functions...
router.get("/users/:id", getUserById); 
router.post("/users/register", createUser);
router.post("/users/login", loginUser);
// additional feature...
router.get("/users", getUsers);

export default router;
