import { User } from "../interfaces/IUser";
import { credentialService } from "./credentialService";

let users: User[] = [];

export const userService = {
  getAllUsers: (): User[] => {
    return users;
  },
  getUserById: (id: number): User | undefined => {
    return users.find(user => user.id === id);
  },
  createUser: (name: string, email: string, birthdate: string, nDni: string, username: string, password: string): void => {
    const newCredentialId = credentialService.createCredential(username, password);
    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      birthdate,
      nDni,
      credentialsId: newCredentialId
    };
    users.push(newUser);
  }
};
