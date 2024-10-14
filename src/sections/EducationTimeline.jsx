// src/components/EducationTimeline.jsx
import VerticalTimelineModule from "react-vertical-timeline-component";
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineModule;
import "react-vertical-timeline-component/style.min.css";

const EducationTimeline = () => {
  return (
    <VerticalTimeline>
      {/* Elemento de trabajo */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#0e0e11", color: "#ffffff" }}
        contentArrowStyle={{ borderRight: "7px solid  #0e0e11" }}
        date="August 23 - Aktualität"
        iconStyle={{ background: "#1a285a", color: "#ffffff" }}
        icon={<img src="/csbe.png" alt="Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> }
      >
        <h3 className="vertical-timeline-element-title">ICT Ausbildung</h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{
            textShadow: `
              0 0 5px #9D3BE4,
              0 0 10px #9D3BE4,
              0 0 15px #9D3BE4
            `,
          }}
        >
          Computer Schule Bern
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#0e0e11", color: "#ffffff" }}
        contentArrowStyle={{ borderRight: "7px solid  #0e0e11" }}
        date="August 21 - Juli 22"
        iconStyle={{ background: "#9D3BE4", color: "#ffffff" }}
        icon={<img src="/morillon.png" alt="Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> }
      >
        <h3 className="vertical-timeline-element-title">
          Sekundarschule
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{
            textShadow: `
              0 0 5px #9D3BE4,
              0 0 10px #9D3BE4,
              0 0 15px #9D3BE4
            `,
          }}
        >
          Schulhaus Morillon
        </h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#0e0e11", color: "#ffffff" }}
        contentArrowStyle={{ borderRight: "7px solid  #0e0e11" }}
        date="September 19 - Juli 20"
        iconStyle={{ background: "#9D3BE4", color: "#ffffff" }}
        icon={<img src="/cristoRey.png" alt="Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> }
      >
        <h3 className="vertical-timeline-element-title">
          Sekundarschule
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{
            textShadow: `
              0 0 5px #9D3BE4,
              0 0 10px #9D3BE4,
              0 0 15px #9D3BE4
            `,
          }}
        >
          Colegio Cristo Rey
        </h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationTimeline;
