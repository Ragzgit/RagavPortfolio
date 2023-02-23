import React from 'react';
import {workExperience} from '../data/data';
import { nanoid } from 'nanoid';
function Experience() {
    return ( <div id="experience" className="background-alt">
    <h2 className="heading">Experience</h2>
    {workExperience.map(work => (
        <div id="experience-timeline" key={nanoid(5)}>
            <div className="vtimeline-point">
                <div className="vtimeline-icon">
                    <i className="fa fa-map-marker" />
                </div>
                <div className="vtimeline-block">
                    <span className="vtimeline-date">{work.duration}</span>
                    <div data-date={work.duration}>
                        <h3>{work.company}</h3>
                        <h4>{work.name}</h4>
                        <p>
                            {work.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ))
        }
    
    </div>);
}

export default Experience;