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
              <h2 className="standard-wrapper-title">
                Where do you want to go
              </h2>
              <div className="standard-wrapper-tagline">
                Trips, experiences, and places. All in one service.
              </div>
              <div className="tour-search">
                <div className="tour-search-wrapper">
                    <input className="input" type="text" placeholder="Destination, city">
                    </input>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
                </div>
                <div className="tour-search-advance"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
