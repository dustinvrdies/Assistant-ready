export interface AuthUser {
  id: string;
  email: string;
  passwordHash: string;
  role: "user" | "creator" | "advertiser" | "admin";
  createdAt: Date;
}

export function createUser(email: string, passwordHash: string): AuthUser {
  return {
    id: crypto.randomUUID(),
    email,
    passwordHash,
    role: "user",
    createdAt: new Date(),
  };
}
