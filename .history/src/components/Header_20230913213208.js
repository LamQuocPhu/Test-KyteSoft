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
                    <svg style={{display: ''}} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
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
                    <a href="#">Shortcodes</a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Shop</a>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  );
}
