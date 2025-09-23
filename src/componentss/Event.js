import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const event = Object.values(data.events)
    .flat()
    .find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="container mt-5 text-center">
        <h2>Event not found</h2>
        <p>The event you are looking for does not exist.</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={event.event_image}
              className="img-fluid rounded-start h-100"
              alt={`Image for ${event.title}`}

              style={{ objectFit: 'cover', height: '400px', width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-4 d-flex flex-column justify-content-between h-100">
              <div>
                <h1 className="card-title fw-bold text-primary">{event.title}</h1>
                <p className="card-text text-muted">{event.description}</p>
                <hr />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="fw-bold">Type:</span> {event.event_type}
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Location:</span> {event.location.city}, {event.location.state}, {event.location.country}
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Date:</span> {new Date(event.date_time).toLocaleDateString()}
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Time:</span> {new Date(event.date_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Organizer:</span> {event.organizer}
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => navigate(-1)}
                >
                  Back to Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;