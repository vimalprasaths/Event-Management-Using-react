import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllEventsPage = () => {
  const navigate = useNavigate();
  const allEvents = Object.values(data.events).flat();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState(allEvents);

  const eventTypes = ['All', ...new Set(allEvents.map(event => event.event_type))];
  const countries = ['All', ...new Set(allEvents.map(event => event.location.country))];

  useEffect(() => {
    const tempFilteredEvents = allEvents.filter(event =>
      (searchTerm === '' ||
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.city.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedType === 'All' || event.event_type === selectedType) &&
      (selectedCountry === 'All' || event.location.country === selectedCountry)
    );
    setFilteredEvents(tempFilteredEvents);
  }, [searchTerm, selectedType, selectedCountry, allEvents]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="container-fluid mt-5">
      <h1 className="mb-4 text-center">All Events</h1>
      <div className="row">

        <div className="col-md-3">
          <div className="card bg-light p-3 shadow-sm border-0">
            <h5 className="card-title text-primary mb-3">Filter Events</h5>


            <div className="mb-3">
              <label htmlFor="search-input" className="form-label fw-bold">Search</label>
              <input
                id="search-input"
                type="text"
                className="form-control"
                placeholder="By title, description, or city"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>


            <div className="mb-3">
              <label htmlFor="type-select" className="form-label fw-bold">Event Type</label>
              <select
                id="type-select"
                className="form-select"
                value={selectedType}
                onChange={handleTypeChange}
              >
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>


            <div className="mb-3">
              <label htmlFor="country-select" className="form-label fw-bold">Location (Country)</label>
              <select
                id="country-select"
                className="form-select"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-secondary mt-2"
              onClick={() => {
                setSearchTerm('');
                setSelectedType('All');
                setSelectedCountry('All');
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="col-md-9">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Event Type</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <tr key={event.id} onClick={() => navigate(`/event/${event.id}`)} style={{ cursor: 'pointer' }}>
                      <td>{event.id}</td>
                      <td>{event.title}</td>
                      <td>{event.event_type}</td>
                      <td>{event.location.city}, {event.location.country}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">No events found matching your filter.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default AllEventsPage;