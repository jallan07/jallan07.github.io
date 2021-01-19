import React from 'react';
import links from '../data/links.json';

function Home() {
  return (
    <main className="container-fluid">
      <section className="row wrapper">
        <section
          className="container main-container col-md-9 col-xs-12 offset-1"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <div className="main-heading">
            <h2>Full-stack student, father, developer.</h2>
          </div>
          <div className="main-content">
            <img
              src="/images/Profile-Picture.jpeg"
              className="img-thumbnail profile-picture float-left rounded mr-3"
              width="150"
              alt="Profile | Josh Allan"
            />
            <p>
              With a Bachelor's degree in Communications from Brigham Young
              University, over 10 years of digital marketing experience, and a
              (soon-to-be) Full-Stack Web Development Certification from the
              University of Richmond, I'm more than capable of taking your
              website to the next level.
            </p>
            <div className="social-links d-inline-block mb-2">
              {links.map((link) => (
                <a
                  className="mr-3"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  key={link.id}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
