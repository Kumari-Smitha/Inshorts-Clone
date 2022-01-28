import React from "react";
import "./Footer.css";

export default function Footer (){
    return (
      <div className="footer">
        <span className="name">
          Inshorts clone made by -{" "}
          <a href="https://www.linkedin.com/in/kumari-smitha/" target="__blank">
            Kumari Smitha
          </a>
        </span>
        <hr style={{ width: "90%" }} />
        <div className="iconContainer">
          <a href="https://github.com/Kumari-Smitha" target="__blank">
            <i className="fab fa-github-square fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/kumari-smitha/" target="__blank">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://app.netlify.com/teams/kumarismitha-dev/"
            target="__blank"
          >
            <i className="fas fa-link fa-2x"></i>
          </a>
        </div>
      </div>
    );
}