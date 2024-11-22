// src/components/EducationTimeline.jsx
import React, { useEffect } from "react";
import VerticalTimelineModule from "react-vertical-timeline-component";
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineModule;
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n.js";

const EducationTimeline = ({ lang }) => {
  const { t } = useTranslation();

  // Cambia el idioma de manera segura en un efecto secundario
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#17171B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #17171B" }}
        date={t("dateCsbe")}
        iconStyle={{ background: "#fff" }}
        icon={
          <img
            src="/csbe.webp"
            alt="Icon"
            loading="lazy"
            style={{
              width: "85%",
              height: "85%",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">{t("educationTitleCsbe")}</h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{
            textShadow: `
              0 0 5px #9D3BE4,
              0 0 15px #9D3BE4,
              0 0 30px #9D3BE4
            `,
          }}
        >
          Computer Schule Bern
        </h4>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          <li>{t("educationDescribeCsbe1")}.</li>
          <li>{t("educationDescribeCsbe2")}.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#17171B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #17171B" }}
        date={t("dateMorillon")}
        iconStyle={{ background: "#fff" }}
        icon={
          <img
            src="/morillon.webp"
            alt="Icon"
            loading="lazy"
            style={{
              width: "85%",
              height: "85%",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">{t("educationTitleMorillon")}</h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{
            textShadow: `
              0 0 5px #9D3BE4,
              0 0 15px #9D3BE4,
              0 0 30px #9D3BE4
            `,
          }}
        >
          Schulhaus Morillon
        </h4>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          <li>{t("educationDescribeMorillon1")}.</li>
          <li>{t("educationDescribeMorillon2")}.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#17171B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #17171B" }}
        date={t("dateCristoRey")}
        iconStyle={{ background: "#fff" }}
        icon={
          <img
            src="/cristoRey.webp"
            alt="Icon"
            loading="lazy"
            style={{
              width: "85%",
              height: "85%",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">{t("educationTitleCristoRey")}</h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{
            textShadow: `
              0 0 5px #9D3BE4,
              0 0 15px #9D3BE4,
              0 0 30px #9D3BE4
            `,
          }}
        >
          Colegio Cristo Rey
        </h4>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          <li>{t("educationDescribeCristoRey1")}.</li>
          <li>{t("educationDescribeCristoRey2")}.</li>
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationTimeline;
