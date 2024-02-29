import { Credential } from "../interfaces/ICredential";

let credentials: Credential[] = [];

export const credentialService = {
  createCredential: (username: string, password: string): number => {
    const newCredentialId = credentials.length + 1;
    const newCredential: Credential = {
      id: newCredentialId,
      username,
      password
    };
    credentials.push(newCredential);
    return newCredentialId;
  },
  validateCredential: (username: string, password: string): number | null => {
    const credential = credentials.find(cred => cred.username === username && cred.password === password);
    return credential ? credential.id : null;
  }
};
