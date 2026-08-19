import type { Presentation } from "../../types";

import { grupoAzimute20260604 } from "./2026-06-04";
import { grupoAzimute20260813 } from "./2026-08-13";
import { grupoAzimute20260819 } from "./2026-08-19";

export const grupoAzimuteVersions: Presentation[] = [
  grupoAzimute20260819,
  grupoAzimute20260813,
  grupoAzimute20260604,
];

export function getLatestGrupoAzimute(): Presentation {
  return grupoAzimuteVersions[0];
}
