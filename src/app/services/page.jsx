"use client";
import { useRevealer } from "@/hooks/useRevealer";
import { useLanguage } from "@/hooks/useLanguage";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ReactLenis from "lenis/react";

gsap.registerPlugin(SplitText);

const SERVICE_CATEGORIES = ["strategy", "social", "performance", "web", "consulting"];

const Services = () => {
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
      delay: 1.5,
      ease: "power4.out",
    });
  }, {});

  return (
    <>
      <ReactLenis root>
        <div className="revealer"></div>
        <div className="services">
          <div className="col">
            <h2 className="services-header">{t("services.title")}</h2>
          </div>
          <div className="col">
            <h2>{t("services.intro")}</h2>

            <div className="services-list">
              {SERVICE_CATEGORIES.map((key) => (
                <div key={key} className="service-category">
                  <h3>{t(`services.${key}.title`)}</h3>
                  <ul>
                    {t(`services.${key}.items`).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="services-cta">
              <p className="services-cta-text">{t("services.cta.label")}</p>
              <a
                className="services-cta-link"
                href={`mailto:${t("services.cta.email")}?subject=${encodeURIComponent(t("services.cta.subject"))}`}
              >
                <span>{t("services.cta.action")}</span>
                <span className="services-cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Services;
