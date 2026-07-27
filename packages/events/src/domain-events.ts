export type DAHEventName =
  | "attention.started"
  | "attention.signal.received"
  | "attention.verified"
  | "reward.created"
  | "wallet.credited";

export interface DomainEvent {
  name: DAHEventName;
  occurredAt: Date;
  aggregateId: string;
  payload: Record<string, unknown>;
}
