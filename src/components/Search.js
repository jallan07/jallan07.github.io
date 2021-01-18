import React from 'react';

function Search({ onChange }) {
  return (
    <div className="mx-auto text-center">
      <h5 className="d-inline mr-2">Project Search</h5>
      <i class="fab fa-searchengin d-inline mr-3"></i>
      <input
        onChange={onChange}
        class="d-inline form-control col-md-8 mb-3"
        type="search"
        placeholder="Enter a project name or technology..."
        aria-label="Search"
      />
    </div>
  );
}

export default Search;
