import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Turn } from "../entities/Turn";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 8080,
    username: "postgres",
    password: "Santigroso678?",
    database: "centromedico_database",
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Turn, Credential],
    subscribers: [],
    migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const TurnModel = AppDataSource.getRepository(Turn);
export const CredentialModel = AppDataSource.getRepository(Credential);