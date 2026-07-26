export interface AttentionScore {
  durationScore: number;
  interactionScore: number;
  completionScore: number;
  trustScore: number;
  fraudPenalty: number;
  finalScore: number;
}

export function calculateAttentionScore(input: Omit<AttentionScore, "finalScore">): AttentionScore {
  const raw =
    input.durationScore * 0.3 +
    input.interactionScore * 0.2 +
    input.completionScore * 0.2 +
    input.trustScore * 0.3 -
    input.fraudPenalty;

  return {
    ...input,
    finalScore: Math.max(0, Math.min(100, Number(raw.toFixed(2)))),
  };
}
