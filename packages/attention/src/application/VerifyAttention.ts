import { calculateAttentionScore, type AttentionScore } from "../domain/AttentionScore";

export interface AttentionVerificationInput {
  secondsActive: number;
  interactions: number;
  completionPercent: number;
  trustScore: number;
  fraudRisk: number;
}

export function verifyAttention(input: AttentionVerificationInput): AttentionScore {
  return calculateAttentionScore({
    durationScore: Math.min(100, input.secondsActive),
    interactionScore: Math.min(100, input.interactions * 10),
    completionScore: input.completionPercent,
    trustScore: input.trustScore,
    fraudPenalty: input.fraudRisk,
  });
}
