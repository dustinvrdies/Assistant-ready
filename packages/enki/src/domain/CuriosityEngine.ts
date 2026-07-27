export interface CuriosityContext {
  relevance: number;
  novelty: number;
  learningPotential: number;
  discoveryValue: number;
  exposureLevel: number;
}

export interface CuriosityScore {
  score: number;
  explanation: string;
}

export function calculateCuriosityScore(context: CuriosityContext): CuriosityScore {
  const score =
    context.relevance * 0.3 +
    context.novelty * 0.25 +
    context.learningPotential * 0.2 +
    context.discoveryValue * 0.25 -
    context.exposureLevel * 0.2;

  return {
    score: Math.max(0, Math.min(100, Number(score.toFixed(2)))),
    explanation: "Calculated from relevance, novelty, learning potential, discovery value, and prior exposure.",
  };
}
