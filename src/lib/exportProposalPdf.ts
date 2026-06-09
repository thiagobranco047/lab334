import html2canvas from "html2canvas";
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
    setTimeout(resolve, 120);
  });

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }
}

function prepareCloneForCapture(element: HTMLElement) {
  element.style.position = "fixed";
  element.style.left = "0";
  element.style.top = "0";
  element.style.opacity = "1";
  element.style.visibility = "visible";
  element.style.transform = "none";
  element.style.pointerEvents = "none";
  element.style.zIndex = "2147483647";

  let parent = element.parentElement;
  while (parent) {
    parent.style.overflow = "visible";
    parent.style.transform = "none";
    parent.style.opacity = "1";
    parent.style.visibility = "visible";
    parent = parent.parentElement;
  }
}

async function waitForFrame(getFrame: () => HTMLElement | null) {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const frame = getFrame();
    if (frame) return frame;

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 50);
    });
  }

  throw new Error("Não foi possível preparar a exportação do PDF.");
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

    const canvas = await html2canvas(frame, {
      backgroundColor: "#ffffff",
      height: PROPOSAL_PDF_HEIGHT,
      width: PROPOSAL_PDF_WIDTH,
      scale: 1,
      useCORS: true,
      logging: false,
      scrollX: 0,
      scrollY: 0,
      windowHeight: PROPOSAL_PDF_HEIGHT,
      windowWidth: PROPOSAL_PDF_WIDTH,
      onclone: (_document, clonedElement) => {
        prepareCloneForCapture(clonedElement);
      },
    });

    if (canvas.width === 0 || canvas.height === 0) {
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
