export interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
}

export function createSession(userId: string): Session {
  return {
    id: crypto.randomUUID(),
    userId,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
  };
}
