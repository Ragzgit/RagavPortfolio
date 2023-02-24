import React from 'react';
import { education } from '../data/data';

function Education() {
    return ( 
        <div id="education">
            <h2 class="heading">Education</h2>
            { education.map(edu => (
                <div class="education-block">
                <h3>{edu.university}</h3>
                <span class="education-date">{edu.date}</span>
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