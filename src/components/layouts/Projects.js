import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import projects from '../data/projects.json';
import Project from '../Project';
import Search from '../Search';

function Projects() {
  // set the search state and method
  const [searchState, setSearch] = useState('');
  // set the projects state and method
  const [projectsState, setProjects] = useState([]);

  // when the component loads, go fetch the projects using the custom api call and store them in the projectsState object
  useEffect(() => {
    setProjects(API.getProjects());
  }, []);

  let filteredProjects = projects.filter((project) => {
    return (
      // allow users to search for project by technology or by name
      project.technologies.toLowerCase().indexOf(searchState) !== -1 ||
      project.name.toLowerCase().indexOf(searchState) !== -1
    );
  });

  // search functionality
  function search(e) {
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <section className="accordion-section row wrapper">
      <section
        className="container main-container col-md-9 col-xs-12 offset-1"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        <div className="main-heading">
          <h2>Recent Coding Projects:</h2>
        </div>

        <section
          className="main-content accordion-section recent-work mb-5 mt-3"
          id="#accordionExample"
        >
          <Search onChange={search} />
          {filteredProjects.length ? (
            <div>
              {filteredProjects.reverse().map((project) => {
                return (
                  <Project
                    key={project.id}
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
              })}{' '}
            </div>
          ) : (
            <div className="search-error my-3">
              <h5>No results to display.</h5>
              <p>
                Are you sure you spelled that right? Try searching by project
                name (such as <em>Goldilocks</em>) or technology (such as{' '}
                <em>React</em>).
              </p>
            </div>
          )}
        </section>
      </section>
    </section>
  );
}

export default Projects;
