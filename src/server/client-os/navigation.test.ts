import { describe, expect, it } from "vitest";
import { resolveNavigation } from "./navigation";

describe("capability-aware navigation", () => {
  it("only returns items whose capabilities were resolved server-side", () => {
    expect(resolveNavigation("grupo-azimute", ["playbooks.read"]).map((item) => item.label)).toEqual(["Visão geral", "Playbooks", "Configurações"]);
  });
});
