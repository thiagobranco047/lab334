import "server-only";
import { createDrizzleGrantRepository } from "./drizzle-grant-repository";

export const businessUnitGrantRepository = createDrizzleGrantRepository();
