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
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Transportation guidance system',
      description:
        'Application to help users decide on the best cost/comfort/budget efficient way to reach a destination',
      stack: ['Python', 'Java', 'Google Map API','Graph Algorithms', 'Docker', 'AWS EC2'],
      sourceCode: '#',
      livePreview: '#',
    },
    {
      name: 'Feedback portal',
      description:
        'Highly scalable web application for the recreational members to submit their feedback',
      stack: ['Java', 'Spring-Boot', 'Hibernate', 'AWS-RDS', 'MySQL', 'Angualr', 'Apache Kafka', 'Google Kubernetes Engine', 'GCP'],
      sourceCode: '#',
      livePreview: '#',
    },
    {
      name: 'Chat server to transfer messages between users',
      description:
        'established a fully duplexed communication between server and users using web sockets',
      stack: ['Node.js', 'Express', 'web socket', 'React'],
      sourceCode: '',
      livePreview: '',
    },
    {
      name: 'Exploratory Data Analysis',
      description:
        'Webscrapped data from web, performed Data wrangling activites and analysed the data to create a report',
      stack: ['Python', 'Google Collab'],
      sourceCode: '#',
      
    }
];
  
  export { projects, workExperience }