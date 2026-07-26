export interface Advertiser {
  id: string;
  companyName: string;
}

export interface Creator {
  id: string;
  displayName: string;
}

export interface AttentionSession {
  id: string;
  userId: string;
  startedAt: Date;
}
