export type Permission =
  | "read"
  | "write"
  | "manage_rewards"
  | "manage_campaigns";

export function hasPermission(role: string, permission: Permission) {
  if (role === "admin") return true;
  return permission === "read";
}
