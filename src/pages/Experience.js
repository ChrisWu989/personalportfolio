import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Glen A. Wilson High School, Hacienda Heights, CA
          </h3>
          <p> High School Diploma </p>
        </VerticalTimelineElement>
    
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mt. San Antonio College, Walnut, CA
          </h3>
          <p> Computer Science, Transfer </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2022 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UC San Diego, San Diego, CA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's of Science
          </h4>
          <p>Mathematics-Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--job"
          date="2024 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coding Minds Academy, Irvine, CA
          </h3>
          <p>Coding Instructor</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience