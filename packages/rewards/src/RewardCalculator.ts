export interface RewardContext {
  campaignRate: number;
  attentionScore: number;
  reputationMultiplier: number;
}

export function calculateReward(context: RewardContext): number {
  const reward =
    context.campaignRate *
    (context.attentionScore / 100) *
    context.reputationMultiplier;

  return Number(reward.toFixed(6));
}
