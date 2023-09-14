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
                    <a href="#">Home<ion-icon name="chevron-down-outline"></ion-icon></a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Tours<ion-icon name="chevron-down-outline"></ion-icon></a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Booking<ion-icon name="chevron-down-outline"></ion-icon></a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Destinations<ion-icon name="chevron-down-outline"></ion-icon></a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Pages<ion-icon name="chevron-down-outline"></ion-icon></a>
                </li>
                <li className="header-menu-item">
                    <a href="#">Blog<ion-icon name="chevron-down-outline"></ion-icon></a>
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