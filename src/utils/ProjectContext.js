import React, { createContext } from 'react';

const ProjectContext = createContext([
  {
    name: 'GitJobs Application Tracker & Rolodex',
    overview:
      'Using GitJobs, you can track your professional contacts and job applications in one central place. Take control of your career today! GitJobs provides a two-pronged approach to empower job-seekers: 1) A digital-rolodex style personal CRM, and 2) An application tracking Job Board.',
    technologies:
      'Javascript, HTML/CSS, MySQL, Node.js, Express.js, jQuery, Bootstrap, Animate On Scroll, Sequelize, Handlebars.js, JawsDB, Heroku, Passport (LinkedIn Oauth 2 Strategy), Travis.yml, ESLint, Nodemon, .env, Body-parser',
    deployedUrl: 'https://gitjobs-application-tracker.herokuapp.com/',
    repoUrl: 'https://github.com/jallan07/gitjobs-application-tracker',
    imageUrl: '/images/GitJobs.jpeg'
  },
  {
    name: '',
    overview: '',
    technologies: '',
    deployedUrl: '',
    repoUrl: '',
    imageUrl: ''
  }
]);

export default ProjectContext;
