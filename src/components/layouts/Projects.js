import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import projects from '../data/projects.json';
import Project from '../Project';

function Projects() {
  // set the search state and method
  const [searchState, setSearch] = useState('');
  // set the projects state and method
  const [projectsState, setProjects] = useState([]);

  // when the component loads, go fetch the projects using the custom api call and store them in the projectsState object
  useEffect(() => {
    setProjects(API.getProjects());
    console.log({ projectsState });
  }, []);

  let filteredProjects = projects.filter((project) => {
    return (
      // allow users to search for project by technology or by name
      project.technologies.toLowerCase().indexOf(searchState) !== -1 ||
      project.name.toLowerCase().indexOf(searchState) !== -1
    );
  });
  console.log(filteredProjects);

  return (
    <div>
      {filteredProjects.reverse().map((project) => {
        return (
          <Project
            id={project.id}
            name={project.name}
            overview={project.overview}
            userStory={project.userStory}
            technologies={project.technologies}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
            image={project.image}
            badgeStatus={project.badgeStatus}
            badgeClass={project.badgeClass}
          />
        );
      })}
    </div>
  );
}

export default Projects;
