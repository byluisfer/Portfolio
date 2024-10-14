// src/components/EducationTimeline.jsx
import VerticalTimelineModule from "react-vertical-timeline-component";
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineModule;
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const EducationTimeline = () => {
  return (
    <VerticalTimeline>
      {/* Elemento de trabajo */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#0e0e11", color: "#ffffff" }}
        contentArrowStyle={{ borderRight: "7px solid  #0e0e11" }}
        date="2011 - present"
        iconStyle={{ background: "#1a285a", color: "#ffffff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
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
          Miami, FL
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
        date="April 2013"
        iconStyle={{ background: "#9D3BE4", color: "#ffffff" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
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
          Online Course
        </h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationTimeline;
