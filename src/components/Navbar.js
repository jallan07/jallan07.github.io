import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/portfolio">
                Portfolio
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
                <Link
                  className="dropdown-item"
                  to="github.com/jallan07"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  className="dropdown-item"
                  to="linkedin.com/in/joshuamallan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  className="dropdown-item"
                  to="drive.google.com/file/d/1O1_YmbnMh73aZw9gmnmFZWn4r_MkU977/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume/CV
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
