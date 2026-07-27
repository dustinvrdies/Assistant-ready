export type AttentionNodeType =
  | "user"
  | "content"
  | "creator"
  | "topic"
  | "campaign";

export interface AttentionNode {
  id: string;
  type: AttentionNodeType;
  metadata: Record<string, unknown>;
}

export interface AttentionRelationship {
  id: string;
  sourceId: string;
  targetId: string;
  type: string;
  strength: number;
  confidence: number;
  createdAt: Date;
  evidence: string[];
}

export function normalizeRelationshipStrength(value: number): number {
  return Math.max(0, Math.min(100, Number(value.toFixed(2))));
}
