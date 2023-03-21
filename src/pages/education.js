import React from 'react';
import { education } from '../data/data';

function Education() {
    return ( 
        <div id="education">
            <h2 className="heading">Education</h2>
            { education.map((edu, ind) => (
                <div className="education-block" key={ind+edu}>
                <h3>{edu.university}</h3>
                <span className="education-date">{edu.date}</span>
                <h4>{edu.degree}</h4>
                {edu.description && <p>
                    {edu.description}
                </p>}
            </div>
            ))}
        </div>
     );
}

export default Education;