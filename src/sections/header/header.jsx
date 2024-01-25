import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__text">
        <h1>Coffee Makes Mood</h1>
        <p>"Indulge in Every sip: Experience Richness of Coffee"</p>
        <a href="#contact" className="btn">
          Let us talk
        </a>
      </div>
    </header>
  );
};

export default Header;
