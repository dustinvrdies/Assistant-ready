export const appName = "DAH Attention Exchange API";

export function healthCheck() {
  return {
    status: "ok",
    service: appName,
    timestamp: new Date().toISOString(),
  };
}

console.log(healthCheck());
