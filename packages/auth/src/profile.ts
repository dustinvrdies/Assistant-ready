export interface UserProfile {
  userId: string;
  displayName: string;
  bio?: string;
  avatarUrl?: string;
}

export function createProfile(userId: string, displayName: string): UserProfile {
  return {
    userId,
    displayName,
  };
}
