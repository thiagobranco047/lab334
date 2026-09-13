import "server-only";
import { createDrizzleShareLinkRepository } from "./drizzle-repository";
import { createShareLinkService } from "./service";

export const shareLinkRepository = createDrizzleShareLinkRepository();
export const shareLinkService = createShareLinkService(shareLinkRepository);
