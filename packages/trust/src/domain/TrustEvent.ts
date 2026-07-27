export type TrustEventType =
  | "verification"
  | "successful_attention"
  | "fraud_detected"
  | "payout_completed";

export interface TrustEvent {
  id: string;
  userId: string;
  type: TrustEventType;
  impact: number;
  createdAt: Date;
}

export function applyTrustImpact(current: number, event: TrustEvent): number {
  return Math.max(0, Math.min(100, current + event.impact));
}
