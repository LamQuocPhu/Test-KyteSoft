import React from "react";

export default function Header() {
  return (
    <div className="img-bg">
      <header className="header">
        <div className="header-logo">
          <a href="#">
            <img src="images/logo.png" alt="logo"></img>
          </a>
        </div>
        <nav className="header-menu">
            <ul className="header-menu-list">
                <li className="header-menu-item">
                    <a href="#">Home</a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Tours</a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Booking</a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Destinations</a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Pages</a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Blog</a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Short</a>
                </li>
                <li className="header-menu-item">
                    <a href="#"></a>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  );
}
