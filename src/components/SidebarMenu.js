import React from "react";
import "../styles/SidebarMenu.scss";
import closeMobileNavBtn from "../js/closeMobileNavBtn";

export default function SidebarMenu(){
    return (
        <div className="sidebar-menu" id="sidebar">
              <button onClick={closeMobileNavBtn} id="closeMobileNavBtn" className="closeBtn">
              <i class="material-icons">clear</i>
              </button>
              <nav className="sidebar-menu-nav">
                    <a href="#" className="sidebar-menu-item">Home</a>
                    <a href="#" className="sidebar-menu-item">Tours</a>
                    <a href="#" className="sidebar-menu-item">Booking</a>
                    <a href="#" className="sidebar-menu-item">Destinations</a>
                    <a href="#" className="sidebar-menu-item">Pages</a>
                    <a href="#" className="sidebar-menu-item">Blog</a>
                    <a href="#" className="sidebar-menu-item">Shortcodes</a>
                    <a href="#" className="sidebar-menu-item">Shop</a>
              </nav>
              <div className="sidebar-img">
                    <div className="SwissApls-tour">
                      <img
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg"
                        alt="Swiss Alps trips" className="SwissAplsFujiSan-tour-img"
                      />
                      <div className="Tour-Info">
                        <p className="sidebar-tour-price">$3,900</p>
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
                    <div className="FujiSan-tour">
                      <img
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg" 
                        alt="5 Lake of FujiSan" className="SwissAplsFujiSan-tour-img"
                      />
                      <div className="Tour-Info">
                        <p className="sidebar-tour-price">
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
    )
}