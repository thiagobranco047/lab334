import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import type { Proposal } from "@/data/proposals";

export const PROPOSAL_PDF_WIDTH = 1920;
export const PROPOSAL_PDF_HEIGHT = 1080;

function waitForPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
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

    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    const frame = getFrame();
    if (!frame) {
      throw new Error("Não foi possível preparar a exportação do PDF.");
    }

    const canvas = await html2canvas(frame, {
      backgroundColor: "#ffffff",
      height: PROPOSAL_PDF_HEIGHT,
      width: PROPOSAL_PDF_WIDTH,
      scale: 1,
      useCORS: true,
      logging: false,
      windowHeight: PROPOSAL_PDF_HEIGHT,
      windowWidth: PROPOSAL_PDF_WIDTH,
    });

    const image = canvas.toDataURL("image/jpeg", 0.92);

    if (index > 0) {
      pdf.addPage([PROPOSAL_PDF_WIDTH, PROPOSAL_PDF_HEIGHT], "landscape");
    }

    pdf.addImage(image, "JPEG", 0, 0, PROPOSAL_PDF_WIDTH, PROPOSAL_PDF_HEIGHT);
  }

  pdf.save(`lab334-proposta-${proposal.slug}.pdf`);
}
