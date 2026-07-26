export interface LedgerEntry {
  id: string;
  userId: string;
  amount: number;
  type: "credit" | "debit";
  createdAt: Date;
}

export function getBalance(entries: LedgerEntry[]): number {
  return entries.reduce((total, entry) => {
    return total + (entry.type === "credit" ? entry.amount : -entry.amount);
  }, 0);
}
