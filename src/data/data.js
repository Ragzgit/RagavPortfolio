const workExperience = [
    {
    name: 'Software Developer',
    company: 'Tata Consultancy Services',
    duration: 'February 2018 - September 2020',
    description:
      'Developed highly responsive user interface components using React and Redux, following Test-driven development (TDD). Worked on back-end development using Spring and container technologies to ensure high availability of microservices. Developed and designed REST APIs for an internal tool to track remote login hours which resulted in 60% increase in usage. Architected solutions with CI/CD, and actively participated in all phases of software development life cycle (SDLC). Conducted multiple A/B and multi-variant tests to improve user interaction across the site, resulting in better user engagement. Automated the testing process by incorporating Cypress in UI testing, reducing bug and enhancing overall quality of the product. Actively participated in all phases of software development life cycle (SDLC), from requirement analysis to implementation. Mentored new team members to accelerate their learning curve on the project.',
    stack: ['React,', 'Redux,', 'Node.js,', 'Express', 'Java/J2EE', 'Spring Boot', 'microservices', 'Swagger', 'MySQL', 'Hibernate', 'HTML,', 'CSS,', 'Jest,', 'Cypress,', 'Falcor,', 'Jenkins,', 'Grunt,', 'Git,', 'Jira,', 'Webpack,', 'Optimizely']
  },
  {
    name: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    duration: 'January 2016 - February 2018',
    description: 'Deployed Java applications and web services on WebLogic Server, ensuring high availability and performance. Collaborated with cross-functional teams to fix issues in a production environment to ensure high stability and availability. Developed a dashboard and an alert system for legacy servers, leading to a 30% reduction in active incidents and improving the overall system reliability. Contributed to the design and implementation of encryption between multiple applications, ensuring secure data transmission. Migrated standalone Linux server to the virtual environment ensuring minimal downtime and smooth transition of services.',
    stack: ['Java/J2EE', 'Spring Boot', 'WebLogic', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Git', 'Linux', 'Shell scripting', 'Javascript']
  },
  
  {
    name: 'Project Management Intern(Technology)',
    company: 'Sands Capital Management Ltd.',
    duration: 'June 2022 - December 2022',
    description: 'Automated the process of cleansing historical data in Snowflake Data Warehouse. Streamlined workflows and standardized project management templates across all product teams, improving project execution. Improved transparency and visibility into project status by developing management dashboards. Conducted requirement gathering and created user stories for product development, resulting in the successful delivery of high-quality products. Collaborated with cross-functional teams to ensure efficient project execution, including resource and dependency management.',
    stack: ['python', 'NumPy', 'Pandas', 'Jira', 'Power-BI', 'Confluence']
  }
  ];

const projects = [
  {
    image: '../Assets/project1.jpg',
    name: 'Admin portal for Ecommerce application',
    description:'Web portal for the admins to login and make changes to products in Warehouse',
    stack: ['Node.js', 'React', 'HTML', 'SASS', 'MySQL workbench', 'Git', 'Local Storage', 'AWS EC2', 'AWS RDS'],
    sourceCode: 'https://github.com/Ragzgit/products-admin-frontend-client/',
    points:[
      'Created MySQL database to store product information',
      'Developed a backend application using express and node.js that interacts with the DB',
      'Designed a UI client that uses the REST API endpoints created by the backend server to add, update and delete products' ,
      'Incorporated authentication and authorization features to prevent illicit access to the portal'       
    ]  
  }, 
    {
      image: '../Assets/project2.jpg',
      name: 'Transportation guidance system',
      description:
        'Application to help users decide on the best cost/comfort/budget efficient way to reach a destination',
      stack: ['Python', 'Java', 'Google Maps API','Graph Algorithms', 'Docker', 'AWS EC2'],
      sourceCode: '#',
      livePreview: '#',
      points: [
        'Gathered Data for air, train, and bus transportation between major US cities',
        'Used kth shortest path algorithm to find the top best ways to reach the destination based on user constraints',
        'Created CI/CD pipeline to deploy the containerized application in AWS EC2'
      ]
    },
    {
      image: '../Assets/project3.jpg',
      name: 'Feedback portal',
      description:
        'Highly scalable web application for the recreational members to submit their feedback',
      stack: ['Java', 'Spring-Boot', 'Hibernate', 'REST API', 'AWS-RDS', 'MySQL', 'Angualr', 'Apache Kafka', 'Google Kubernetes Engine', 'GCP'],
      sourceCode: '#',
      livePreview: '#',
      points:[
        'Designed and implemented RESTful and used Hibernate for Object-Relational Mapping (ORM) to connect with AWS RDS',
        'Containerized and deployed the application on Kubernetes using Google Kubernetes Engine (GKE)',
        'Created a single-page web application using Angular for the front-end',
        'Developed Kafka producer-consumer module to create a real time data pipeline',
      ]
    },
    
];

const education = [{
    university: 'George Mason University',
    date: 'January 2021 - December 2022',
    degree: 'M.S. in Computer Science',
    description: 'Gained solid foundation in important topics related to software development -  designing and developing software systems that are distributed across multiple computers and networks, to assess and optimize the performance of software systems, building software systems using reusable software components, and an understanding of how to design and manage large-scale software systems'
},
{
    university: 'Anna University',
    date: 'August 2011 - May 2015',
    degree: 'B.E in Electronics & Instrumentation',
}
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'JavaScript',
    'React',
    'Redux',
    'Node.js',
    'Webpack',
    'HTML5',
    'CSS3',
    'SASS',
    'Jest',
    'Cypress',
    'TypeScript',
    'Express',
    'MySQL',
    'MongoDB',
    'Python',
    'Java 8',
    'Java Spring Boot',
    'Hibernate',
    'Docker',
    'Kubernetes',
    'Apache Kafka',
    'RESTful web services',
    'Graph APIs',
    'AWS',
    'GCP',
    'Git'
];
  
  
  export { projects, workExperience, skills, education }