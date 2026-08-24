/**
 * Gera PDF da proposta via rota de impressão (A4 paisagem, 1 slide = 1 página).
 *
 * Uso:
 *   node scripts/generate-proposal-pdf.mjs [slug] [baseUrl]
 *
 * Exemplo:
 *   node scripts/generate-proposal-pdf.mjs grupo-azimute-22082026 http://localhost:3000
 */

import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2] || "grupo-azimute-22082026";
const baseUrl = (process.argv[3] || "http://localhost:3000").replace(/\/$/, "");
const outDir = path.join(path.resolve(__dirname, ".."), "public", "propostas");
const outFile = path.join(outDir, `${slug}.pdf`);

/** Escala o corpo do slide se o conteúdo ainda ultrapassar a área da página. */
async function fitOverflowingSlides(page) {
  const scales = await page.$$eval(".print-slide", (slides) =>
    slides.map((slide, index) => {
      const body = slide.querySelector(".print-slide-body");
      if (!body) return { index, scale: 1, needed: 0, available: 0 };

      const header = slide.querySelector(".print-slide-header");
      const available = slide.clientHeight - (header?.getBoundingClientRect().height || 0) - 4;
      const needed = body.scrollHeight;
      const scale =
        needed > available ? Math.max(0.62, Math.floor((available / needed) * 100) / 100) : 1;

      if (scale < 1) {
        body.style.zoom = String(scale);
      }

      return { index, scale, needed, available };
    })
  );

  const fitted = scales.filter((item) => item.scale < 1);
  if (fitted.length) {
    console.log(
      "Ajuste de escala:",
      fitted
        .map((item) => `#${item.index + 1}→${Math.round(item.scale * 100)}%`)
        .join(", ")
    );
  }
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const url = `${baseUrl}/propostas/${slug}/print`;
  console.log(`Abrindo ${url}`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
  });

  await page.emulateMedia({ media: "print" });
  await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForSelector(".print-slide", { timeout: 60000 });
  await page.waitForTimeout(800);

  const slideCount = await page.locator(".print-slide").count();
  console.log(`${slideCount} slides → ${slideCount} páginas (A4 paisagem)`);

  await fitOverflowingSlides(page);

  await page.pdf({
    path: outFile,
    format: "A4",
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "8mm", right: "10mm", bottom: "8mm", left: "10mm" },
  });

  await browser.close();
  console.log(`PDF salvo em ${outFile}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
