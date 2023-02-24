const workExperience = [
    {
    name: 'Software Developer',
    company: 'Tata Consultancy Services',
    duration: 'February 2018 - September 2020',
    description:
      'Developed highly responsive user interface components using react concepts by following Test-driven development using Jest for writing unit test. Created multiple experiment models (A/B and multi-variant tests) that enhanced user interaction across the site. Automated test process by incorporating cypress in UI testing, thereby reducing bug tasks considerably. Mentored new members',
    stack: ['React,', 'Redux,', 'Node.js,', 'HTML,', 'CSS,', 'Jest,', 'Cypress,', 'Falcor,', 'Jenkins,', 'Grunt,', 'Git,', 'Jira,', 'Webpack,', 'Optimizely']
  },
  {
    name: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    duration: 'January 2016 - February 2018',
    description: 'Worked with production servers to ensure secure data exchange between different B2B systems while liasing with different cross functional teams. Reduced active incidents by around 30% by volunteering to develop a dashboard and an alert system on legacy production. Orchestrated migration activity from standalone Linux server to the virtual environment.',
    stack: ['Linux', 'Shell scripting', 'Javascript']
  },
  
  {
    name: 'Project Management Intern(Technology)',
    company: 'Sands Capital Management Ltd.',
    duration: 'June 2022 - December 2022',
    description: 'Streamlined and standardized workflow and project management templates across all the product teams and improved transparency by developing management dashboards. Helped with gathering requirements, writing user stories and with resource and dependnecy management. Automated the process of improving data accuracy of historical data in the Data warehouse',
    stack: ['python', 'Power-BI', 'Confluence']
  }
  ];

const projects = [
    {
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
      name: 'Feedback portal',
      description:
        'Highly scalable web application for the recreational members to submit their feedback',
      stack: ['Java', 'Spring-Boot', 'Hibernate', 'AWS-RDS', 'MySQL', 'Angualr', 'Apache Kafka', 'Google Kubernetes Engine', 'GCP'],
      sourceCode: '#',
      livePreview: '#',
      points:[
        'Designed and created RESTful webservices',
        'Containerized and deployed the applications on Kubernetes (used GKE)',
        'Incorporated Kafka brokers to implement a real-time data pipeline',
        'Used Hibernate ORM for persisting data in AWS RDS'
      ]
    },
    {
      name: 'Exploratory Data Analysis',
      description:'Explored EDGAR data and created a report based on the performed analysis',
      stack: ['Python', 'Google Collab'],
      sourceCode: '#',
      points:[
        'Collected data by web scrapping from EDGAR official website URL',
        'Performed Data wrangling on the raw data',
        'Analyzed and created a report after extracting meaningful insights and patterns on the preprocessed data'        
      ]  
    }
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