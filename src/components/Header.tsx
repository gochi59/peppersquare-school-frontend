import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="mask-group">
        <img
          src="src\assets\science-lab8.jpg" // Replace with your image path
          alt="Header Background"
          className="header-image"
        />
        <div className="header-text">
          <h1>Our Events Gallery</h1>
          <p>Events at DBTR are filled with joyous occasions, cultural gatherings, and learning opportunities that bring us all together.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;