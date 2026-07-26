import { hashPassword, verifyPassword } from "./password";
import { createUser, type AuthUser } from "./users";
import { createSession, type Session } from "./session";

export function registerUser(email: string, password: string): AuthUser {
  const passwordHash = hashPassword(password);
  return createUser(email, passwordHash);
}

export function loginUser(user: AuthUser, password: string): Session | null {
  if (!verifyPassword(password, user.passwordHash)) {
    return null;
  }

  return createSession(user.id);
}
