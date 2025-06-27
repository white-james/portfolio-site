import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a className="nav-link px-2" href="https://www.linkedin.com/in/jameswhiteit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin text-secondary icon-hover" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a className="nav-link px-2" href="https://github.com/white-james" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="bi bi-github text-secondary icon-hover" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#bio">Bio</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
            <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            <li className="nav-item"><a className="nav-link" href="cv.html">CV</a></li>
            <li className="nav-item"><a className="nav-link" href="mailto:james.michael.white@outlook.com">Email</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
