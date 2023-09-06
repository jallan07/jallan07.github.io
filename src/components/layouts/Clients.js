import React from 'react';
import Client from '../Client';

function Clients() {
  return (
    <section class="accordion-section row wrapper">
      <section
        class="container main-container col-md-9 col-xs-12 offset-1"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        <div class="main-heading">
          <h2>Freelance Work:</h2>
        </div>
        <section class="main-content row recent-work">
          <Client />
        </section>
      </section>
    </section>
  );
}

export default Clients;
