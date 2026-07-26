export type LedgerStatus = "pending" | "approved" | "rejected";

export interface LedgerEntry {
  id: string;
  userId: string;
  amount: number;
  source: "attention_reward";
  status: LedgerStatus;
  createdAt: Date;
}

export function createRewardEntry(userId: string, amount: number): LedgerEntry {
  return {
    id: crypto.randomUUID(),
    userId,
    amount,
    source: "attention_reward",
    status: "pending",
    createdAt: new Date(),
  };
}
