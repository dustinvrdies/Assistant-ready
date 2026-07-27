export type LedgerTransactionType = "credit" | "debit";

export interface LedgerTransaction {
  id: string;
  accountId: string;
  type: LedgerTransactionType;
  amount: number;
  referenceId: string;
  createdAt: Date;
}

export function isBalanced(transaction: LedgerTransaction): boolean {
  return transaction.amount > 0 && transaction.referenceId.length > 0;
}
