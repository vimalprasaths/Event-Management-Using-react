import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import birthday from "./images/birthdayimage.png";
import marriage from "./images/marriage.webp";
import cultural from "./images/cultural.webp";
import movie from "./images/movie.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const eventTypes = [
    { name: 'Birthdays', image: birthday, path: 'birthdays' },
    { name: 'Marriages', image: marriage, path: 'marriages' },
    { name: 'Cultural Fests', image: cultural, path: 'culturals' },
    { name: 'Movie Releases', image: movie, path: 'movies' },
  ];

  const handleCardClick = (eventType) => {
    navigate(`/events/${eventType}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Event Categories</h1>
      <div className="row g-4">
        {eventTypes.map((type) => (
          <div className="col-12 col-md-6 col-lg-3" key={type.name}>
            <div 
              className="card h-100 shadow-sm text-center" 
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={type.image} 
                className="card-img-top mx-auto mt-3 rounded-circle" 
                alt={type.name} 
                style={{ width: '150px', height: '150px', objectFit: 'cover' }} // Corrected styles
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{type.name}</h5>
                <button 
                  className="btn btn-primary mt-3"
                  onClick={() => handleCardClick(type.path)}
                >
                  View {type.name} Events
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;