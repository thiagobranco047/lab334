"use client";
import { useRevealer } from "@/hooks/useRevealer";
import { useLanguage } from "@/hooks/useLanguage";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ReactLenis from "lenis/react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

gsap.registerPlugin(SplitText);

const Work = () => {
  useRevealer();
  const { t } = useLanguage();

  // All work images
  const workImages = [
    "azimute_01_potfolio_grupo_azimute_01.webp",
    "azimute_010_potfolio_azimute_imoveis_02.webp",
    "azimute_011_potfolio_azimute_imoveis_03.webp",
    "azimute_012_potfolio_azimute_tech_12.webp",
    "azimute_013_folder_azimute_tech_01.webp",
    "azimute_014_folder_azimute_tech_02.webp",
    "azimute_015_folder_azimute_tech_03.webp",
    "azimute_016_folder_azimute_tech_04.webp",
    "azimute_017_potfolio_azimute_tech_04.webp",
    "azimute_018_potfolio_azimute_tech_05.webp",
    "azimute_019_potfolio_azimute_tech_06.webp",
    "azimute_02_potfolio_grupo_azimute_05.webp",
    "azimute_020_potfolio_azimute_tech_07.webp",
    "azimute_021_potfolio_azimute_tech_08.webp",
    "azimute_022_potfolio_azimute_tech_09.webp",
    "azimute_023_potfolio_azimute_tech_10.webp",
    "azimute_024_potfolio_azimute_tech_11.webp",
    "azimute_03_potfolio_grupo_azimute_04.webp",
    "azimute_04_potfolio_grupo_azimute_03.webp",
    "azimute_05_potfolio_grupo_azimute_02.webp",
    "azimute_06_potfolio_azimute_engenharia_01.webp",
    "azimute_07_potfolio_azimute_engenharia_03.webp",
    "azimute_08_potfolio_azimute_engenharia_02.webp",
    "azimute_09_potfolio_azimute_imoveis_01.webp",
    "potfolio_alugue_trailer_01.webp",
    "potfolio_alugue_trailer_02.webp",
    "potfolio_catarinas_arquitetura_01.webp",
    "potfolio_catarinas_arquitetura_02.webp",
    "potfolio_catarinas_arquitetura_03.webp",
    "potfolio_gameducando_01.webp",
    "potfolio_gameducando_02.webp",
    "potfolio_gameducando_03.webp",
    "potfolio_gameducando_04.webp",
    "potfolio_owl_01.webp",
    "potfolio_owl_02.webp",
    "potfolio_owl_03.webp",
    "potfolio_owl_04.webp",
    "potfolio_owl_05.webp",
    "potfolio_valentinos_01.webp",
    "potfolio_valentinos_02.webp",
    "potfolio_valentinos_03.webp",
    "potfolio_vicap_01.webp",
    "potfolio_vicap_02.webp",
    "potfolio_vicap_03.webp",
    "potfolio_vicap_04.webp",
    "potfolio_vicap_05.webp",
    "potfolio_vicap_06.webp",
    "potfolio_vicap_07.webp",
    "potfolio_vicap_08.webp",
    "potfolio_vicap_09.webp",
    "potfolio_vicap_10.webp",
    "potfolio_vicap_11.webp",
    "potfolio_vicap_12.webp",
  ];

  // Distribute images across two columns
  const column1 = workImages.filter((_, index) => index % 2 === 0);
  const column2 = workImages.filter((_, index) => index % 2 === 1);

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Fancybox options
    });

    return () => {
      Fancybox.unbind("[data-fancybox]");
      Fancybox.close();
    };
  }, []);

  useGSAP(() => {
    const splitText = SplitText.create("h1", {
      type: "words",
      wordsClass: "word",
      mask: "words",
    });

    gsap.set(splitText.words, { y: "110%" });

    gsap.to(splitText.words, {
      y: "0%",
      duration: 1.5,
      stagger: 0.25,
      delay: 1.75,
      ease: "power4.out",
    });
  }, {});

  return (
    <>
      <ReactLenis root>
        <div className="revealer"></div>
        <div className="work">
          <h1>{t('work.title')}</h1>

          <div className="projects">
            <div className="column">
              {column1.map((image, index) => (
                <a
                  key={index}
                  href={`/work/${image}`}
                  data-fancybox="gallery"
                  data-src={`/work/${image}`}
                >
                  <img src={`/work/${image}`} alt="" className="work-image" />
                </a>
              ))}
            </div>
            <div className="column">
              {column2.map((image, index) => (
                <a
                  key={index}
                  href={`/work/${image}`}
                  data-fancybox="gallery"
                  data-src={`/work/${image}`}
                >
                  <img src={`/work/${image}`} alt="" className="work-image" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Work;
