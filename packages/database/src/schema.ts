export interface UserTable {
  id: string;
  email: string;
  role: string;
  createdAt: Date;
}

export interface WalletTable {
  id: string;
  userId: string;
  balance: number;
}

export interface AttentionEventTable {
  id: string;
  userId: string;
  durationSeconds: number;
}
