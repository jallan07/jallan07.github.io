import React from 'react';
import clients from './data/clients.json';

function Client() {
  return (
    <div>
      {clients.map((client) => {
        return (
          <div className="col-md-12 img-container" key={client.id}>
            <a href={client.deployedUrl} target="_blank" rel="noreferrer">
              <img
                src={client.image}
                alt={`${client.name} | Web Design by Josh Allan`}
                className="img-fluid img-portfolio"
              />
              <div className="img-middle">
                <div className="img-text">
                  {client.name} &nbsp;
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>
              <div className="img-bottom">
                <div className="img-text">
                  <em>Built with {client.platform}</em>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Client;
