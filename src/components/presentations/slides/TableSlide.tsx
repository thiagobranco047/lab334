"use client";

import { motion } from "framer-motion";

import type { PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer, staggerItem } from "../animations/slideVariants";

export default function TableSlide({ slide }: { slide: PresentationSlide }) {
  const table = slide.table;

  if (!table) return null;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex w-full flex-col py-0"
    >
      {slide.eyebrow && (
        <motion.p
          variants={fadeUpItem}
          className="mb-4 font-display text-sm font-light uppercase tracking-[0.28em] text-presentation-muted"
        >
          {slide.eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={fadeUpItem}
        className="max-w-slide-title lg:max-w-slide-title-lg font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extralight leading-[1.05] tracking-lab text-presentation-fg"
      >
        {slide.title}
      </motion.h2>

      {slide.body && (
        <motion.p
          variants={fadeUpItem}
          className="mt-5 max-w-slide-body lg:max-w-slide-body-lg font-body text-base font-light leading-relaxed text-presentation-fg sm:text-lg"
        >
          {slide.body}
        </motion.p>
      )}

      <motion.div variants={fadeUpItem} className="mt-8 overflow-x-auto border border-presentation-line">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="border-b border-presentation-line bg-presentation-surface/60">
              {table.headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted sm:px-6 sm:py-4"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <motion.tbody variants={staggerContainer} initial="hidden" animate="show">
            {table.rows.map((row, rowIndex) => (
              <motion.tr
                key={`${rowIndex}-${row.join("-")}`}
                variants={staggerItem}
                className="border-b border-presentation-line last:border-b-0"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${rowIndex}-${cellIndex}`}
                    className="px-4 py-3 font-body text-sm font-light leading-relaxed text-presentation-fg sm:px-6 sm:py-4 sm:text-base"
                  >
                    {cell}
                  </td>
                ))}
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
