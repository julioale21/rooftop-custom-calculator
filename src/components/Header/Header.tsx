import React from "react";
import "./index.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img height="80" src="https://www.rooftopacademy.com/6c17e93d0fca4da31f87012b78f5adc7.png" />
      <div className="logos">
        <a
          href="https://github.com/julioale21/rooftop-react-calculator"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="https://icongr.am/fontawesome/github.svg?size=35&color=ffffff" />
        </a>
        <a
          href="https://www.linkedin.com/in/julio-alejandro-romero-bb4197119/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="https://icongr.am/fontawesome/linkedin.svg?size=35&color=ffffff" />
        </a>
      </div>
    </header>
  );
};

export default Header;
