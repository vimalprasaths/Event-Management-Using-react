import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import EventListPage from './components/Eventlist';
import EventDetailPage from './components/Event';
import AllEventsPage from './components/Allevent';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events/:eventType" element={<EventListPage />} />
            <Route path="/event/:id" element={<EventDetailPage />} />
            <Route path="/all-events" element={<AllEventsPage />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;