export interface AuthSession {
  userId: string;
  token: string;
  expiresAt: Date;
}

export function createSession(userId: string): AuthSession {
  return {
    userId,
    token: crypto.randomUUID(),
    expiresAt: new Date(Date.now() + 86400000),
  };
}
