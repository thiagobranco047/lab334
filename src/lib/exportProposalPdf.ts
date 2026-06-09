import { toCanvas } from "html-to-image";
import { jsPDF } from "jspdf";

import type { Proposal } from "@/data/proposals";

export const PROPOSAL_PDF_WIDTH = 1920;
export const PROPOSAL_PDF_HEIGHT = 1080;

async function waitForPaint() {
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });

  await new Promise<void>((resolve) => {
    setTimeout(resolve, 200);
  });

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  await Promise.allSettled([
    document.fonts.load('300 16px "Roboto"'),
    document.fonts.load('200 64px "Outfit"'),
    document.fonts.load('100 64px "Outfit"'),
  ]);
}

async function waitForFrame(getFrame: () => HTMLElement | null) {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const frame = getFrame();
    if (frame && frame.offsetWidth > 0 && frame.offsetHeight > 0) {
      return frame;
    }

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 50);
    });
  }

  throw new Error("Não foi possível preparar a exportação do PDF.");
}

function isCanvasBlank(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");
  if (!context) return true;

  const sampleWidth = Math.min(canvas.width, 240);
  const sampleHeight = Math.min(canvas.height, 135);
  const imageData = context.getImageData(0, 0, sampleWidth, sampleHeight).data;

  for (let index = 0; index < imageData.length; index += 4) {
    const red = imageData[index];
    const green = imageData[index + 1];
    const blue = imageData[index + 2];
    const alpha = imageData[index + 3];

    if (alpha > 0 && (red < 250 || green < 250 || blue < 250)) {
      return false;
    }
  }

  return true;
}

export async function exportProposalToPdf(
  proposal: Proposal,
  getFrame: () => HTMLElement | null,
  setSlideIndex: (index: number) => void
) {
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [PROPOSAL_PDF_WIDTH, PROPOSAL_PDF_HEIGHT],
    compress: true,
  });

  for (let index = 0; index < proposal.slides.length; index += 1) {
    setSlideIndex(index);
    await waitForPaint();

    const frame = await waitForFrame(getFrame);

    const canvas = await toCanvas(frame, {
      width: PROPOSAL_PDF_WIDTH,
      height: PROPOSAL_PDF_HEIGHT,
      canvasWidth: PROPOSAL_PDF_WIDTH,
      canvasHeight: PROPOSAL_PDF_HEIGHT,
      pixelRatio: 1,
      backgroundColor: "#ffffff",
      cacheBust: true,
      skipAutoScale: true,
    });

    if (isCanvasBlank(canvas)) {
      throw new Error("A captura do slide retornou uma imagem vazia.");
    }

    const image = canvas.toDataURL("image/jpeg", 0.92);

    if (index > 0) {
      pdf.addPage([PROPOSAL_PDF_WIDTH, PROPOSAL_PDF_HEIGHT], "landscape");
    }

    pdf.addImage(image, "JPEG", 0, 0, PROPOSAL_PDF_WIDTH, PROPOSAL_PDF_HEIGHT);
  }

  pdf.save(`lab334-proposta-${proposal.slug}.pdf`);
}
