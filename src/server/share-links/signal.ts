import "server-only";
import type { ShareLinkRepositoryError } from "./repository";

export function signalShareLinkFailure(error: ShareLinkRepositoryError): void {
  console.error(JSON.stringify({ event: "share_link_repository_failure", code: error.code, operation: error.operation, correlationId: crypto.randomUUID() }));
}
