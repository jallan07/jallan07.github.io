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
  return <div key={id}>{name}</div>;
}

export default Project;
