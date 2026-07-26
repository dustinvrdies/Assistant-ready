export type UserRole = "user" | "creator" | "advertiser" | "admin";

export interface UserIdentity {
  id: string;
  email: string;
  role: UserRole;
}

export interface RewardTransaction {
  id: string;
  userId: string;
  amount: number;
  createdAt: Date;
}
