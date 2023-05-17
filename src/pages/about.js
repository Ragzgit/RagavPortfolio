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
                   I am AWS certified Associate Solutions Architect with 4+ years of Software Engineering experience especially with respect to developing interactive and highly scalable web application and RESTful web services. I recently graduaged from George Mason University with Master's in Computer Science. I worked on various projects ranging from designing and developing Restful Web Services, containerizing & deploying applications in GKE, incorporating Apache Kafka as a message broker to create real time data pipeline, and using both SQL and NoSQL databases for data persistance. 
                </p>
            </div>
        </div>
    </div>
</div>  );
}

export default About;