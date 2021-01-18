import React from 'react';

function Project({
  id,
  name,
  overview,
  userStory,
  technologies,
  deployedUrl,
  repoUrl,
  image,
  badgeClass,
  badgeStatus
}) {
  return (
    <div className="card" key={id}>
      <div
        className="card-header d-flex justify-content-between align-items-center"
        id={`${name}`}
      >
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-toggle="collapse"
            data-target={`#${id}`}
            aria-expanded="false"
            aria-controls={id}
          >
            {name}
          </button>
        </h2>
        <span className={`badge badge-${badgeClass} badge-pill`}>
          {badgeStatus}
        </span>
      </div>
      <div
        id={id}
        className="collapse"
        aria-labelledby={id}
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <h5>Project Overview</h5>
          <p>{overview}</p>
        </div>
        <div className="card-story">
          <h5>User Story</h5>
          <p>{userStory}</p>
        </div>
        <div className="card-story">
          <h5>Languages & Libraries Used</h5>
          <p>{technologies}</p>
        </div>
        <div className="card-links">
          <h5>Links</h5>
          <a
            href={deployedUrl}
            className="mr-3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-external-link-alt mr-2"></i>Deployed App
          </a>
          <br />
          <a href={repoUrl} className="mr-3" target="_blank" rel="noreferrer">
            <i className="fab fa-github mr-2"></i>Github Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
