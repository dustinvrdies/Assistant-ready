export interface TrustProfile {
  userId: string;
  accountTrust: number;
  behaviorTrust: number;
  attentionTrust: number;
  fraudRisk: number;
  updatedAt: Date;
}

export function calculateTrustScore(profile: TrustProfile): number {
  const score =
    profile.accountTrust * 0.25 +
    profile.behaviorTrust * 0.25 +
    profile.attentionTrust * 0.5 -
    profile.fraudRisk;

  return Math.max(0, Math.min(100, Number(score.toFixed(2))));
}
