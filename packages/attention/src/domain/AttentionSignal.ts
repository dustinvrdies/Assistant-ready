export type AttentionSignalType =
  | "heartbeat"
  | "interaction"
  | "progress"
  | "completion";

export interface AttentionSignal {
  sessionId: string;
  userId: string;
  type: AttentionSignalType;
  timestamp: Date;
  value: number;
}

export function validateSignal(signal: AttentionSignal): boolean {
  if (!signal.sessionId || !signal.userId) return false;
  if (signal.value < 0) return false;

  const age = Date.now() - signal.timestamp.getTime();
  return age >= 0 && age < 1000 * 60 * 10;
}
