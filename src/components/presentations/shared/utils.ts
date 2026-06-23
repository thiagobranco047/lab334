export function extractPillarNumber(eyebrow?: string): string | null {
  if (!eyebrow) return null;
  const match = eyebrow.match(/(\d+)/);
  return match ? match[1].padStart(2, "0") : null;
}

export function padSlideNumber(value: number): string {
  return value.toString().padStart(2, "0");
}

export function formatCreatedAt(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}
