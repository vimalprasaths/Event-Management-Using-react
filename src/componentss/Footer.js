import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Event Management. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;