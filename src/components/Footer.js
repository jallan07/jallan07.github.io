import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h6>Created by Josh Allan | Copyright © 2020</h6>
        <span>
          <Link to="//www.freepik.com" target="_blank">
            Background by starline
          </Link>
        </span>
        <span> | </span>
        <span>
          <Link to="//reactjs.org/" target="_blank">
            Built with React.js
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
