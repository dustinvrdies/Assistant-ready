export interface NoveltySignal {
  contentFreshness: number;
  userExposure: number;
  discoveryValue: number;
  diversityBonus: number;
}

export interface NoveltyScore {
  score: number;
  signals: NoveltySignal;
}

export function calculateNoveltyScore(signals: NoveltySignal): NoveltyScore {
  const score =
    signals.contentFreshness * 0.3 +
    (100 - signals.userExposure) * 0.25 +
    signals.discoveryValue * 0.3 +
    signals.diversityBonus * 0.15;

  return {
    score: Math.max(0, Math.min(100, Number(score.toFixed(2)))),
    signals,
  };
}
