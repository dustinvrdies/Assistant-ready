export interface RequestContext {
  requestId: string;
  timestamp: string;
}

export function createContext(requestId: string): RequestContext {
  return {
    requestId,
    timestamp: new Date().toISOString(),
  };
}
