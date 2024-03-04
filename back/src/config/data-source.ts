import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Turn } from "../entities/Turn";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 8080,
    username: "postgres",
    password: "Santigroso678?",
    database: "henry_demo",
    // dropSchema: true,
    synchronize: true,
    logging: true,
    entities: [User, Turn],
    subscribers: [],
    migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const TurnModel = AppDataSource.getRepository(Turn);

