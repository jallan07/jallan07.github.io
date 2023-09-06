import React from 'react';
import { Link } from 'react-router-dom';
import links from './data/links.json';

function Navbar() {
  // filter out facebook from the links data object so it doesn't appear in the connect dropdown
  const connectLinks = links.filter((links) => links.name !== 'Facebook');
  return (
    <header className="bootstrap-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          JOSH ALLAN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/clients">
                Clients
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Connect
              </Link>
              <div className="dropdown-menu">
                {connectLinks.map((link) => {
                  return (
                    <a
                      className="dropdown-item"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      key={link.id}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
