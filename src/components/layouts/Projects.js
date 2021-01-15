import React, { useState, useEffect } from 'react';
import projects from '../data/projects.json';
import API from '../../utils/API';

function Projects() {
  // set the search state and method
  const [searchState, setSearch] = useState('');
  // set the projects state and method
  const [projectsState, setProjects] = useState([]);

  // when the component loads, go fetch the projects using the custom api call and store them in the projectsState object
  useEffect(() => {
    API.getProjects().then(({ data }) => {
      setProjects(data);
      console.log({ projectsState });
    });
  }, []);

  let filteredProjects = projects.filter((project) => {
    return (
      // allow users to search for project by technology or by name
      project.technologies.toLowerCase().indexOf(searchState) !== -1 ||
      project.name.toLowerCase().indexOf(searchState) !== -1
    );
  });

  console.log({ filteredProjects });

  return <div>Hi</div>;
}

export default Projects;
