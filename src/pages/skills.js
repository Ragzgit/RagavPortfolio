import React from 'react';
import {skills} from '../data/data';
import { nanoid } from 'nanoid';

function Skills() {
    return ( 
        <div id="skills">
            <h2 className="heading">Skills</h2>
            <ul>{skills.map((skill) => (
                <li key={nanoid(5)}>{skill}</li>
            ))
            }  
           </ul>
        </div>

     );
}

export default Skills;