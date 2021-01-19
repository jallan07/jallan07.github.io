import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <main className="container-fluid">
      <section className="row wrapper">
        <section
          className="container main-container col-md-9 col-xs-12 offset-1"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <div className="my-5 mx-5">
            <h1 className="display-1 text-center">
              <i className="fas fa-exclamation-triangle mr-2"></i>404
            </h1>
            <h2 className="display-4 text-center mt-4 mx-5">
              This is not the page you were looking for.{' '}
              <Link to="/">Move along...</Link>
            </h2>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Error404;
