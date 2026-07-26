export * from "./events";

export interface AttentionReward {
  userId: string;
  secondsWatched: number;
  reward: number;
}

export interface RewardEngineConfig {
  baseRate: number;
}

export function createRewardEngine(config: RewardEngineConfig) {
  return {
    calculate(seconds: number) {
      return Number((seconds * config.baseRate).toFixed(6));
    },
  };
}

export function calculateReward(secondsWatched: number): number {
  const rate = 0.001;
  return Number((secondsWatched * rate).toFixed(6));
}
