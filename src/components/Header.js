import React from "react";
import "../styles/Header.scss";
import VideoBg from "./VideoBg";

export default function Header() {
  return (
    <div className="img-bg">

      <header className="header">
        <div className="header-logo">
          <a href="#">
            <img src="images/logo.png" alt="logo"></img>
          </a>
        </div>
        <div className="header-nav-menu">
          <nav className="header-menu">
            <ul className="header-menu-list">
              <li className="header-menu-item dropdown">
                <a href="#" className="button_dropdown">
                  Home<i className="fa fa-angle-down"></i>
                </a>
                <ul className="content_dropdown">
                  <li>
                    <a id="dropdown-content" href="#">
                      Home 1 - Background Image
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Home 2 - Youtube Video
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Home 3 - Google Inspired
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Home 4 - Travel Site
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header-menu-item dropdown">
                <a href="#" className="button_dropdown">
                  Tours<i className="fa fa-angle-down"></i>
                </a>
                <ul className="content_dropdown">
                  <li>
                    <a id="dropdown-content" href="#">
                      Tour Classic Fullwidth{" "}
                      <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">2 Columns</a>
                      </li>
                      <li>
                        <a href="#">3 Columns</a>
                      </li>
                      <li>
                        <a href="#">4 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Tour Classic Sidebar <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Left Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Tour Grid Fullwidth <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">2 Columns</a>
                      </li>
                      <li>
                        <a href="#">3 Columns</a>
                      </li>
                      <li>
                        <a href="#">4 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Tour Grid Sidebar <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Left Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Tour List Sidebar <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Left Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Tour Header Type <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">Featured Image</a>
                      </li>
                      <li>
                        <a href="#">Videos</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Tour Categories <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">Rural</a>
                      </li>
                      <li>
                        <a href="#">Snow & Ice</a>
                      </li>
                      <li>
                        <a href="#">Wildlife</a>
                      </li>
                      <li>
                        <a href="#">Mountain</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="header-menu-item dropdown">
                <a href="#" className="button_dropdown">
                  Booking<i className="fa fa-angle-down"></i>
                </a>
                <ul className="content_dropdown">
                  <li>
                    <a id="dropdown-content" href="#">
                      Online Payment for Booking{" "}
                      <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">Variable Tour Pricing</a>
                      </li>
                      <li>
                        <a href="#">Simple Tour Pricing</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Custom Booking Form <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">Booking Form + Sub Tour Date</a>
                      </li>
                      <li>
                        <a href="#">Booking Form + Custom Date</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Tour Durations <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">Single Day Tour</a>
                      </li>
                      <li>
                        <a href="#">Multiple Days Tour</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Custom Booking URL for Affiliate Tour
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Custom Booking using custom HTML & Shortcode
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Header Option <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">Standard Background Header</a>
                      </li>
                      <li>
                        <a href="#">Video Background Header</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Layout Option <i className="fa fa-angle-right"></i>
                    </a>
                    <ul id="submenu">
                      <li>
                        <a href="#">With Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Fullwidth</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="header-menu-item dropdown">
                <a href="#" className="button_dropdown">
                  Destinations<i className="fa fa-angle-down"></i>
                </a>
                <ul className="content_dropdown">
                  <li>
                    <a id="dropdown-content" href="#">
                      Destination Fullwidth
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Destination + Video Header
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Destination Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Destination Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Single Destination
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Single Destination + Video
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header-menu-item dropdown">
                <a href="#" className="button_dropdown">
                  Pages<i className="fa fa-angle-down"></i>
                </a>
                <ul className="content_dropdown">
                  <li>
                    <a id="dropdown-content" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Page Fullwidth
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Page + Video Background Header
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Page Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Page Left Sidebar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header-menu-item dropdown">
                <a href="#" className="button_dropdown">
                  Blog<i className="fa fa-angle-down"></i>
                </a>
                <ul className="content_dropdown">
                  <li>
                    <a id="dropdown-content" href="#">
                      Blog Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Blog Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Blog Fullwidth
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Blog Grid Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Blog Grid Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Blog Grid Fullwidth
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Blog Full + Grid Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Blog Full + Grid Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Blog Full + Grid Fullwidth
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header-menu-item dropdown">
                <a href="#" className="button_dropdown">
                  Shortcodes<i className="fa fa-angle-down"></i>
                </a>
                <ul className="content_dropdown">
                  <li>
                    <a id="dropdown-content" href="#">
                      Accordion & Toggles
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Alert Boxes
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Animated Content
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Button & Social Icons
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Columns
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Google Maps
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Image Frame & Animation
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Image Teasers
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Pricing Tables
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Tabs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header-menu-item dropdown">
                <a href="#" className="button_dropdown">
                  Shop<i className="fa fa-angle-down"></i>
                </a>
                <ul className="content_dropdown">
                  <li>
                    <a id="dropdown-content" href="#">
                      Shop Fullwidth
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Shop Sidebar
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Single Product Fullwidth
                    </a>
                  </li>
                  <li>
                    <a id="dropdown-content" href="#">
                      Single Product With Sidebar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* menu-sidebar */}
          <div className="header-nav-mobile">
            <span className="header-menu-item">
              <button
                className="fa fa-bars"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              ></button>
            </span>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-body">
                <button
                  type="button"
                  id="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  X
                </button>
                <nav className="bm-item-list">
                  <a href="#" className="bm-item">
                    Home
                  </a>
                  <a href="#" className="bm-item">
                    Tours
                  </a>
                  <a href="#" className="bm-item">
                    Booking
                  </a>
                  <a href="#" className="bm-item">
                    Destinations
                  </a>
                  <a href="#" className="bm-item">
                    Pages
                  </a>
                  <a href="#" className="bm-item">
                    Blog
                  </a>
                  <a href="#" className="bm-item">
                    Shortcodes
                  </a>
                  <a href="#" className="bm-item">
                    Shop
                  </a>
                </nav>
                <div className="menu-sidebar-img">
                  <div id="sidebar-img" className="SwissApls-tour">
                    <img
                      src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg"
                      alt="Swiss Alps trips"
                    />
                    <div className="Tour-Info">
                      <p>$3,900</p>
                      <h5>Swiss Alps Trip</h5>
                      <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                    </div>
                  </div>
                  <div id="sidebar-img" className="FujiSan-tour">
                    <img
                      src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg"
                      alt="Swiss Alps trips"
                    />
                    <div className="Tour-Info">
                      <p className="tour-price">
                        <i>$4,900 </i>$4,200
                      </p>
                      <h5>5 Lake Of FujiSan</h5>
                      <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="mobile-social-media">
                  <a href="#">
                    <li className="fa fa-facebook-official"></li>
                  </a>
                  <a href="#">
                    <li className="fa fa-twitter"></li>
                  </a>
                  <a href="#">
                    <li className="fa fa-youtube"></li>
                  </a>
                  <a href="#">
                    <li className="fa fa-pinterest"></li>
                  </a>
                  <a href="#">
                    <li className="fa fa-instagram"></li>
                  </a>
                </ul>
              </div>
            </div>

            {/* menu-sidebar */}
            <span className="header-menu-item cart-count">
              <a href="#">
                <i className="fa fa-shopping-cart fa-flip-horizontal"></i>
                <div>0</div>
              </a>
            </span>
          </div>
        </div>
      </header>
      <div className="center-wrapper">
        <div className="inner-content">
          <div className="standard-wrapper">
            <h2 className="standard-wrapper-title">Where do you want to go?</h2>
            <div className="standard-wrapper-tagline">
              Trips, experiences, and places. All in one service.
            </div>
            <div className="tour-search">
              <div id="advance-search-positive" className="tour-search-wrapper">
                <div className="one-fourth">
                  <span id="destination-input">
                    <input
                      className="input-inner"
                      type="text"
                      placeholder="Destination, city"
                    />
                    <span>
                      <i id="destination-search" className="fa fa-search"></i>
                    </span>
                  </span>
                </div>
                <div id="calendar-relative" className="one-fourth">
                  <select id="month" name="month">
                    <option>Any Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                  <i id="calendar-absolute" className="fa fa-calendar-o"></i>
                </div>
                <div className="one-fourth" id="sortbyday-relative">
                  <select id="sort-by" name="montsort-byh">
                    <option value="date">Sort By Date</option>
                    <option value="price_low">Price Low to High</option>
                    <option value="price_high">Price High to Low</option>
                    <option value="name">Sort By Name</option>
                    <option value="popular">Sort By Popularity</option>
                    <option value="review">Sort By Review Score</option>
                  </select>
                  <i
                    id="sortbyday-absolute"
                    class="fa fa-exchange fa-rotate-90"
                  ></i>
                </div>
                <div className="one-fourth">
                  <input className="search-btn" type="submit" value="Search" />
                </div>
                <div className="tour-search-advance">
                  <a href="#" id="advance-search">
                    <i className="fa fa-angle-down">Advanced Search</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
