import React, { useEffect, useState, useCallback } from "react";
import openMobileNavBtn from "../js/openMobileNavBtn";
import "../styles/Header.scss";

export default function StickyHeader() {
  // const [backgroundColorChange, setBackgroundColorChange] = useState("transparent");
  const [imageChange, setImageChange] = useState("images/logo.png");
  // const [iconColorChange, setIconColorChange] = useState("#fff");
  // const [headerNavColorChange, setHeaderNavColorChange] = useState("#fff");

  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  // const [headeropacity, setHeaderOpacity] = useState(false);

  //
  const handleNavigation = useCallback(
    (e) => {
      const root = document.documentElement;
      root?.style.setProperty("--headeropacity",
      y > window.scrollY ? "1" : "0");
      // if (y > window.scrollY) {
      //   //user scroll down 
      //   setHeaderOpacity("1");
      // } else if (y < window.scrollY) {
      //   //user scroll up
      //   setHeaderOpacity("0");
      // }
      setY(window.scrollY);
      
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  //
  const headerColorChange = () => {
    window.addEventListener("scroll", () => {
      const root = document.documentElement;
      root?.style.setProperty("--backgroundColorChange",
      window.scrollY > 180 ? "#fff" : "transparent"
      );
      root?.style.setProperty("--IconColorChange",
      window.scrollY > 180 ? "#000" : "#fff"
      );
      root.style.setProperty("--HeaderNavColorChange",
      window.scrollY > 180 ? "#000" : "#fff"
      );
      root.style.setProperty("--HeaderBoxShadow",
      window.scrollY > 180 ? "0 1px 10px rgba(0, 0, 0, 0.1)" : "0"
      );
      if (window.scrollY > 180) {
        // setBackgroundColorChange("#fff");
        setImageChange(
          "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png"
        );
        // setIconColorChange("#000");
        // setHeaderNavColorChange("#000");
      } else {
        // setBackgroundColorChange("transparent");
        setImageChange("images/logo.png");
        // setIconColorChange("#fff");
        // setHeaderNavColorChange("#fff");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
  }, []);

  return (
    <header className="header-nav">
      <div className="header-logo">
        <a href="#">
          <img src={imageChange} alt="logo" />
        </a>
      </div>
      <div className="header-laptop-nav">
        <ul className="header-laptop-nav-list">
          <li className="header-laptop-nav-item dropdown">
            <a href="#" className="button_dropdown">
              Home
              <i className="fa fa-angle-down"></i>
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
          <li className="header-laptop-nav-item dropdown">
            <a href="#" className="button_dropdown">
              Tours
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="content_dropdown">
              <li>
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Tour Classic Fullwidth
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Tour Classic Sidebar
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Tour Grid Fullwidth
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Tour Grid Sidebar
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Tour List Sidebar
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Tour Header Type
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Tour Categories
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
          <li className="header-laptop-nav-item dropdown">
            <a href="#" className="button_dropdown">
              Booking
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="content_dropdown">
              <li>
                <a id="dropdown-content" href="#">
                  Online Payment for Booking
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Custom Booking Form
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Tour Durations
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Header Option
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
                <a id="dropdown-content" href="#" style={{ float: "lef" }}>
                  Layout Option
                </a>
                <i className="fa fa-angle-right" style={{ float: "right" }}></i>
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
          <li className="header-laptop-nav-item dropdown">
            <a href="#" className="button_dropdown">
              Destinations
              <i className="fa fa-angle-down"></i>
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
          <li className="header-laptop-nav-item dropdown">
            <a href="#" className="button_dropdown">
              Pages
              <i className="fa fa-angle-down"></i>
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
          <li className="header-laptop-nav-item dropdown">
            <a href="#" className="button_dropdown">
              Blog
              <i className="fa fa-angle-down"></i>
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
          <li className="header-laptop-nav-item dropdown">
            <a href="#" className="button_dropdown">
              Shortcodes
              <i className="fa fa-angle-down"></i>
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
          <li className="header-laptop-nav-item dropdown">
            <a href="#" className="button_dropdown">
              Shop
              <i className="fa fa-angle-down"></i>
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
      </div>
      <div className="header-nav-menu-mobile">
        <button onClick={openMobileNavBtn} id="openMobileNavBtn" className="header-mobile-nav-btn">
          <i className="fa fa-bars" ></i>
        </button>
        <div className="header-cart-wrapper">
          <div className="cart-count">0</div>
          <a href="#">
            <i className="fa fa-shopping-cart fa-flip-horizontal"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
