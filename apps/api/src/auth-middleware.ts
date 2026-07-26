export interface AuthContext {
  userId?: string;
  authenticated: boolean;
}

export function requireAuth(context: AuthContext): boolean {
  return context.authenticated && Boolean(context.userId);
}
