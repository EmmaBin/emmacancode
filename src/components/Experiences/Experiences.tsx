import React from 'react'
import './experiences.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../lib/data"

const Experience = () => {

    const cardBackground = '#7096D1';
    return (

        <div className='experiences'>

            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: cardBackground,
                                boxShadow: "none",
                                border: "0.5px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:cardBackground,
                              }}
       
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3>{item.title}</h3>
                            <p>
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>

        </div>
    )
}

export default Experience