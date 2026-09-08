import "server-only";
import { randomUUID } from "node:crypto";
import type { GrantRepositoryErrorCode } from "./grant-repository";

export interface AuthorizationOperationalSignal {
  code: GrantRepositoryErrorCode;
  operation: string;
  organizationId: string;
  correlationId: string;
}

export type AuthorizationSignalSink = (signal: AuthorizationOperationalSignal) => void;

export const logAuthorizationSignal: AuthorizationSignalSink = (signal) => {
  console.error(JSON.stringify({ event: "client_os.authorization.repository_error", ...signal }));
};

export function createAuthorizationSignal(code: GrantRepositoryErrorCode, operation: string, organizationId: string): AuthorizationOperationalSignal {
  return { code, operation, organizationId, correlationId: randomUUID() };
}
