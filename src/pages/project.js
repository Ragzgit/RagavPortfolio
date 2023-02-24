import React from 'react';
import { projects } from '../data/data';
import { nanoid } from 'nanoid';

function Project() {    
    return ( <div id="projects" className="background-alt">
    <h2 className="heading">Projects</h2>
    <div className="container">
        <div className="row">
            {projects.map(project => (
                <div className="project shadow-large no-image" key={nanoid(5)}>
                {/* <div class="project-image">
                    <img src="images/project.jpg" alt={project.name}/>
                </div> */}
                <div className="project-info">
                    <h3>{project.name}</h3>
                    <p>
                        {project.description}
                    </p>
                    <ul>
                        {project.points.map(list => <li key={nanoid(5)}>{list}</li>)}
                    </ul>
                    <a href="#">View Project</a>
                </div>
            </div>
            ))} 
        </div>
    </div>
    </div>);
}

export default Project;