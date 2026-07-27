export interface AttentionIntelligenceInput {
  attentionScore: number;
  trustScore: number;
  noveltyScore: number;
  userPreferenceMatch: number;
}

export interface AttentionIntelligenceOutput {
  recommendationWeight: number;
  rewardPriority: number;
  explanation: string;
}

export function evaluateAttentionOpportunity(
  input: AttentionIntelligenceInput,
): AttentionIntelligenceOutput {
  const weight =
    input.attentionScore * 0.35 +
    input.trustScore * 0.25 +
    input.noveltyScore * 0.25 +
    input.userPreferenceMatch * 0.15;

  return {
    recommendationWeight: Number(Math.min(100, weight).toFixed(2)),
    rewardPriority: Number(Math.min(100, weight * 0.9).toFixed(2)),
    explanation: "Opportunity ranked using attention quality, trust, novelty, and relevance signals.",
  };
}
