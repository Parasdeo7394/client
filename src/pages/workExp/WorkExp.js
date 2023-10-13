import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date=" Course Duration May20223 - Sep2023 "
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                
                
                MERN FULL DEVELOPER
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                GUVI GEEKS NETWORK PVT LTD
              </h4>
              <p>
                HTML,CSS,JS,BOOTSTRAP,SQL,MONGODB,
                EXPRESS.JS,REACTjs,Nodejs
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Nov 2022 - Apr 2023 "
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                
                
                Mechanical Design Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Nakoda Machinery Pvt. Ltd.
              </h4>
              <p>
                AUTOCAD,SOLIDEDGE,TEAMCENTER
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jun 2022 - Nov 2022 "
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                
                Mechanical Design and Simulation Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                JYOTI TECHNICAL SERVICES PRIVATE LIMITED
              </h4>
              <p>
                CATIA,LS DYNA , PAMSTAMP
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Oct 2021 - Jun 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Mechanical Draftsman
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Satyam Industrie
              </h4>
              <p>
                Creative,optimised and Useful Design With help of Autocad & Solidworks
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Dec 2018 - Feb 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                GUEST LECTURER
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Kusumraj Private Industrial Institue
              </h4>
              <p>
                FITTER THEORY
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;