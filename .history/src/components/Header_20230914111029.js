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
                  <input
                    className="input-inner"
                    type="text"
                    placeholder="Destination, city"
                  ></input>
                  <span>
                    <ion-icon name="search-outline"></ion-icon>
                  </span>
                  <div className="one-fourth themecolor">
                    <section id="month" name="month">
                      <option>Anymonth</option>
                      <option value="january">January</option>
                      <option value="">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="">November</option>
                      <option value="">December</option>
                    </section>
                  </div>
                  <div className="one-fourth themecolor">
                    <section id="month" name="month">
                      <option></option>
                    </section>
                  </div>
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
