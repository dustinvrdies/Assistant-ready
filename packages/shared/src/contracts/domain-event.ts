export interface DomainEvent<TPayload = unknown> {
  readonly id: string;
  readonly name: string;
  readonly version: number;
  readonly occurredAt: Date;
  readonly aggregateId: string;
  readonly correlationId: string;
  readonly payload: TPayload;
}

export function createDomainEvent<TPayload>(input: Omit<DomainEvent<TPayload>, "id" | "occurredAt">): DomainEvent<TPayload> {
  return {
    ...input,
    id: crypto.randomUUID(),
    occurredAt: new Date(),
  };
}
