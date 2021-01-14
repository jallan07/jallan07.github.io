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
                <li class="ml-4">
                  <strong>Phone: </strong>
                  <a href="tel:6153065800">(615) 306-5800</a>
                </li>
                <li class="ml-4">
                  <strong>Email: </strong>
                  <a href="mailto:allan.josh07@gmail.com">
                    allan.josh07@gmail.com
                  </a>
                </li>
                <li class="ml-4">
                  <strong>GitiHub: </strong>
                  <Link to="github.com/jallan07" target="_blank">
                    github.com/jallan07
                  </Link>
                </li>
                <li class="ml-4">
                  <strong>LinkedIn: </strong>
                  <Link tp="linkedin.com/in/joshuamallan" target="_blank">
                    linkedin.com/in/joshuamallan
                  </Link>
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
