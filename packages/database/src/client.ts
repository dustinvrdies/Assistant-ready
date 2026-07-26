export interface DatabaseClient {
  connected: boolean;
}

export function createDatabaseClient(): DatabaseClient {
  return {
    connected: false,
  };
}
