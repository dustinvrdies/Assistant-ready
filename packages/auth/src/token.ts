import crypto from "node:crypto";

export interface AuthToken {
  value: string;
  userId: string;
  createdAt: Date;
}

export function issueToken(userId: string): AuthToken {
  return {
    value: crypto.randomUUID(),
    userId,
    createdAt: new Date(),
  };
}
