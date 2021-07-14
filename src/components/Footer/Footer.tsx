import React from "react";
import "./index.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>
        Solved by{" "}
        <span>
          <a href="https://github.com/julioale21" rel="noopener noreferrer" target="_blank">
            @julioale21
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
