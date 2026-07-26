export type AttentionStatus = "started" | "active" | "completed" | "rejected";

export interface AttentionSession {
  id: string;
  userId: string;
  contentId: string;
  startedAt: Date;
  status: AttentionStatus;
}

export interface AttentionSignal {
  sessionId: string;
  secondsActive: number;
  interacted: boolean;
  confidence: number;
}

export function isValidSignal(signal: AttentionSignal): boolean {
  return signal.secondsActive > 0 && signal.confidence >= 0.5;
}
