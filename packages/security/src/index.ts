export function sanitizeInput(value: string): string {
  return value.trim().replace(/[<>]/g, "");
}

export function createRequestId(): string {
  return crypto.randomUUID();
}
