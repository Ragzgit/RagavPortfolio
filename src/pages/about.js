import React from 'react';

function About() {
    return ( <div id="about">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h2 className="heading">About Me</h2>
            </div>
            <div className="col-md-8">
                <p>
                   I am a Software Engineer with 4+ years of experience with wide range of experience in developing interactive and highly scalable web application. I recently graduaged from George Mason University with Master's in Computer Science. I worked on various projects designing and developing Restful Web Services, containerizing, and deploying applications in GKE, incorporating Apache Kafka as a message broker, using Amazon RDS for data persistence and graph algorithm related prjects.
                </p>
            </div>
        </div>
    </div>
</div>  );
}

export default About;