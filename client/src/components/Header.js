import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top">
        <a href="#" className="navbar-brand">
          NUBIAN COILS | Salon & Stylist Finder
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
              <a href="#" className="nav-link">
                HOME
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                LOGIN
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                SIGN UP
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
