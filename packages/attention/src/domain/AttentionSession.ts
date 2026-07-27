export type AttentionSessionStatus =
  | "created"
  | "active"
  | "verifying"
  | "approved"
  | "rejected"
  | "rewarded";

export interface AttentionSession {
  id: string;
  userId: string;
  campaignId: string;
  contentId: string;
  status: AttentionSessionStatus;
  startedAt: Date;
  endedAt?: Date;
}

export function canTransition(
  from: AttentionSessionStatus,
  to: AttentionSessionStatus,
): boolean {
  const transitions: Record<AttentionSessionStatus, AttentionSessionStatus[]> = {
    created: ["active"],
    active: ["verifying"],
    verifying: ["approved", "rejected"],
    approved: ["rewarded"],
    rejected: [],
    rewarded: [],
  };

  return transitions[from].includes(to);
}
