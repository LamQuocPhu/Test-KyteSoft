import React from "react";

export default function Header() {
  return (
    <div className="wrapper-header">
      {/* <div className="img-bg">
        <img src="https://images.unsplash.com/photo-1682686581797-21ec383ead02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"></img>
      </div> */}
      <div className="header">
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
      </div>
    </div>
  );
}
