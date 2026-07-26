export interface AttentionReward {
  userId: string;
  secondsWatched: number;
  reward: number;
}

export function calculateReward(secondsWatched: number): number {
  const rate = 0.001;
  return Number((secondsWatched * rate).toFixed(6));
}
