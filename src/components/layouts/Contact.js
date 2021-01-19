import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <main class="container-fluid">
      <section class="row wrapper">
        <section
          class="container main-container col-md-6 col-xs-12 offset-1"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <div class="main-heading">
            <h2>Let's [git] in touch!</h2>
          </div>
          <div class="main-content">
            <div class="mb-3">
              <ul>
                <li class="ml-4 contact-link">
                  <strong>Phone: </strong>
                  <a href="tel:6153065800">(615) 306-5800</a>
                </li>
                <li class="ml-4 contact-link">
                  <strong>Email: </strong>
                  <a href="mailto:allan.josh07@gmail.com">
                    allan.josh07@gmail.com
                  </a>
                </li>
                <li class="ml-4 contact-link">
                  <strong>GitiHub: </strong>
                  <a
                    href="https://www.github.com/jallan07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/jallan07
                  </a>
                </li>
                <li class="ml-4 contact-link">
                  <strong>LinkedIn: </strong>
                  <a
                    href="https://www.linkedin.com/in/joshuamallan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/joshuamallan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Contact;
