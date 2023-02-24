import React from 'react';
import {skills} from '../data/data';
import { nanoid } from 'nanoid';

function Skills() {
    return ( 
        <div id="skills">
            <h2 class="heading">Skills</h2>
            <ul>{skills.map((skill) => (
                <li key={nanoid(5)}>{skill}</li>
            ))
            }  
           </ul>
        </div>

     );
}

export default Skills;