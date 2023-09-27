import React from "react";
import "../styles/Header.scss";
import videobg from "../videos/videobg.mp4";
import openMobileNavBtn from "../js/openMobileNavBtn";

export default function Header() {
  return (
    <section>
      <video className="videobg" src={videobg} autoPlay muted loop></video>
      <div className="header-wrapper">
        <div className="center-wrapper">
          <div className="inner-content">
            <div className="standard-wrapper">
              <h2 className="standard-wrapper-title">
                Where do you want to go?
              </h2>
              <div className="standard-wrapper-tagline">
                Trips, experiences, and places. All in one service.
              </div>
              <div className="tour-search">
                <div
                  id="advance-search-positive"
                  className="tour-search-wrapper"
                >
                  <div className="tour-search-wrapper-item">
                    <input
                      className="input-inner"
                      type="text"
                      placeholder="Destination, city"
                    />
                    <i
                      id="destination-search"
                      className="fa fa-search tour-search-icon"
                    ></i>
                  </div>
                  <div
                    id="calendar-relative"
                    className="tour-search-wrapper-item"
                  >
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
                    <i
                      id="calendar-absolute"
                      className="fa fa-calendar-o tour-search-icon"
                    ></i>
                  </div>
                  <div
                    className="tour-search-wrapper-item"
                    id="sortbyday-relative"
                  >
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
                      class="fa fa-exchange fa-rotate-90 tour-search-icon"
                    ></i>
                  </div>
                  <div className="tour-search-wrapper-item">
                    <input
                      className="search-btn"
                      type="submit"
                      value="Search"
                    />
                  </div>
                </div>
                <div className="tour-search-advance">
                  <a href="#" id="advance-search">
                    <i className="fa fa-angle-down"></i>
                    Advanced Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
