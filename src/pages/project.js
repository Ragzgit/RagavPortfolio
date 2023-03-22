import React from 'react';
import { projects } from '../data/data';
import { nanoid } from 'nanoid';
import project1 from '../Assets/project1.jpg'
import project2 from '../Assets/project2.jpg';
import project3 from '../Assets/project3.jpg';

const projectImg = [project1, project2, project3];

function Project() {    
    return ( <div id="projects" className="">
    <h2 className="heading">Projects</h2>
    <div className="container">
        <div className="row">
            {projects.map((project, index) => (
                
                <div className="project shadow-large" key={nanoid(5)}>
                <div className="project-image">
                    <img src={projectImg[index]} alt={project.name}/>
                </div>
                <div className="project-info">
                    <h3><a className={project.sourceCode.length < 2 ? "noClick" : ""} href={project.sourceCode} target="_blank" style={{textDecoration: "none"}}>{project.name}</a></h3>
                    <p>
                        {project.description}
                    </p>
                    <ul>
                        {project.points.map(list => <li key={nanoid(5)}>{list}</li>)}
                    </ul>
                    {/* <a href="#" style={{textDecoration: "none"}}>View Project</a> */}
                </div>
            </div>
            ))} 
        </div>
    </div>
    </div>);
}

export default Project;