export interface Campaign {
  id: string;
  advertiserId: string;
  title: string;
  budget: number;
  active: boolean;
}

export interface CreatorProfile {
  id: string;
  userId: string;
  audienceSize: number;
}
