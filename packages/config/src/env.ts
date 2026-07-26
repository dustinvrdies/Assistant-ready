const required = [
  "DATABASE_URL",
  "REDIS_URL",
];

export function validateEnvironment(env: NodeJS.ProcessEnv) {
  return required.filter((key) => !env[key]);
}
