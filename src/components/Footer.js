import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h6>Created by Josh Allan | Copyright © 2020</h6>
        <span>
          <Link to="http://www.freepik.com">
            Background by starline / Freepik
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
