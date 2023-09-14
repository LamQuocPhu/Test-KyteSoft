import React from "react";

export default function Header() {
  return (
    <
      <header className="header">
        <div className="header-logo">
          <img className="logo" src="./images/logo.png" alt="logo"></img>
        </div>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Home
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Tours
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Booking
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Destinations
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Pages
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Blog
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Home
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Shortcodes
              </a>
            </li>
          </ul>
        </nav>
      </header>
  );
}
