import React from 'react';

// components
import Technologies from '../Technologies';
import GithubStats from '../GithubStats';
import Socials from '../Socials';

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
            <div className="row">
              <div className="col-md-2 mx-auto my-3">
                <img
                  src="/images/Profile-Picture.jpeg"
                  className="img-thumbnail profile-picture float-left rounded mr-3"
                  width="200"
                  alt="Profile | Josh Allan"
                />
              </div>
              <div className="col-md-10">
                <p>
                  Innovative Frontend Developer with expertise in both web
                  design and digital marketing. Offering 10+ years of
                  professional marketing experience, with a fresh Full-Stack Web
                  Development certification (MERN stack) added to my belt. Quick
                  to learn and master new technologies, and able to work in both
                  team- and self-directed environments.
                </p>
                <ul className="ml-5 mr-3 small">
                  <li>
                    <img
                      src="/images/uofr.png"
                      alt="University of Richmond"
                      width="20"
                      className="mr-0"
                    ></img>{' '}
                    &nbsp; University of Richmond Coding Bootcamp (Full-stack,
                    MERN) alum
                  </li>
                  <li>👔 &nbsp; 2x entreprenuer and business owner</li>
                  <li>
                    🥅 &nbsp; 2021 Goal: Land my first job as a Frontend Web
                    Developer
                  </li>
                  <li>
                    👯 &nbsp; Looking to collaborate with other code-hungry
                    developers
                  </li>
                  <li>
                    🎥 &nbsp; Lover of all things Star Wars (movies, books, tv,
                    games, etc.)
                  </li>
                  <li>
                    🍗 &nbsp; Fun fact: I run the @rvagrubs instagram account
                  </li>
                </ul>
                {/* Import the technologies component */}
                <Technologies />
                {/* Import the github stats component */}
                <GithubStats />
                {/* Import the social links component */}
                <Socials />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
