export interface UserRecord {
  id: string;
  email: string;
  passwordHash: string;
  role: string;
  createdAt: Date;
}

export interface SessionRecord {
  id: string;
  userId: string;
  expiresAt: Date;
}
