export type UserRole = "user" | "creator" | "advertiser" | "admin";

export const rolePermissions: Record<UserRole, string[]> = {
  user: ["read"],
  creator: ["read", "create_content"],
  advertiser: ["read", "create_campaign"],
  admin: ["*"],
};

export function canAccess(role: UserRole, permission: string) {
  return rolePermissions[role].includes("*") || rolePermissions[role].includes(permission);
}
