"use client";
import { useRevealer } from "@/hooks/useRevealer";
import { useLanguage } from "@/hooks/useLanguage";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ReactLenis from "lenis/react";

gsap.registerPlugin(SplitText);

const Contact = () => {
  useRevealer();
  const { t } = useLanguage();

  useGSAP(() => {
    const splitText = SplitText.create("h2", {
      type: "lines",
      linesClass: "line",
      mask: "lines",
    });

    gsap.set(splitText.lines, { y: "110%" });

    gsap.to(splitText.lines, {
      y: "0%",
      duration: 1.5,
      stagger: 0.1,
      delay: 1.75,
      ease: "power4.out",
    });
  }, {});

  return (
    <>
      <ReactLenis root>
        <div className="revealer"></div>
        <div className="contact">
          <div className="col">
            <h2>{t('contact.title')}</h2>
          </div>
          <div className="col">
            <div className="contact-copy">
              <h2>{t('contact.collaborations')}</h2>
              <h2>{t('contact.email1')}</h2>
            </div>

            <div className="contact-copy">
              <h2>{t('contact.inquiries')}</h2>
              <h2>{t('contact.email2')}</h2>
            </div>

            <div className="socials">
              <p>{t('contact.instagram')}</p>
              <p>{t('contact.twitter')}</p>
              <p>{t('contact.linkedin')}</p>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Contact;
