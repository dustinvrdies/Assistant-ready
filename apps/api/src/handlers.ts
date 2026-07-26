import { healthCheck } from "./index";

export function healthHandler() {
  return healthCheck();
}

export function rewardHandler() {
  return {
    status: "pending",
    message: "Reward processing service initializing",
  };
}
