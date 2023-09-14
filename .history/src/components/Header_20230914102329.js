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
              <a href="#">
                Home<ion-icon name="chevron-down-outline"></ion-icon>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="#">
                Tours<ion-icon name="chevron-down-outline"></ion-icon>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="#">
                Booking<ion-icon name="chevron-down-outline"></ion-icon>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="#">
                Destinations<ion-icon name="chevron-down-outline"></ion-icon>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="#">
                Pages<ion-icon name="chevron-down-outline"></ion-icon>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="#">
                Blog<ion-icon name="chevron-down-outline"></ion-icon>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="#">
                Shortcodes<ion-icon name="chevron-down-outline"></ion-icon>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="#">
                Shop<ion-icon name="chevron-down-outline"></ion-icon>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="#">
                <ion-icon name="menu-outline"></ion-icon>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="#">
                <ion-icon name="cart-outline"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>
        <div className="center-wrapper">
          <div className="inner-content">
            <div className="standard-wrapper">
                <h2 className="standard-wrapper-title">Where do you want to go</h2>
                <div className="standard-wrapper-tagline">
                Trips, experiences, and places. All in one service.
                </div>
                form
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
