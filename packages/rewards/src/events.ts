export interface AttentionEvent {
  userId: string;
  contentId: string;
  seconds: number;
  verified: boolean;
}

export function isValidAttention(event: AttentionEvent) {
  return event.verified && event.seconds > 0;
}
