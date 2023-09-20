import React from "react";
import "../styles/Option.scss";
import "../js/option-btn.js";
import myFunction from "../js/option-btn.js";

export default function Option() {
  return (
    <section>
      <div id="option-wrapper" className="open">
        <div className="inner">
          <div className="inner-content">
            <h6 className="inner-content-title">Created With Grand Tour</h6>
            <p className="inner-content-describre">
              We designed Grand Tour theme to make it works especially for tour
              & travel site. Here are a few included examples that you can
              import with one click.
            </p>
            <div className="inner-content-list">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
            </div>
            <h6 className="inner-content-title">Predefined Colors</h6>
            <ul className="inner-content-list-color">
              <li>
                <a href="#">
                  <div
                    className="circle"
                    style={{ backgroundColor: "#FF4A52" }}
                  ></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    className="circle"
                    style={{ backgroundColor: "#FF9500" }}
                  ></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    className="circle"
                    style={{ backgroundColor: "#FFCC00" }}
                  ></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    className="circle"
                    style={{ backgroundColor: "#4CD964" }}
                  ></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    className="circle"
                    style={{ backgroundColor: "#5AC8FA" }}
                  ></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    className="circle"
                    style={{ backgroundColor: "#007AFF" }}
                  ></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    className="circle"
                    style={{ backgroundColor: "#5856D6" }}
                  ></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    className="circle"
                    style={{ backgroundColor: "#FF2D55" }}
                  ></div>
                </a>
              </li>
            </ul>
            <h6 className="inner-content-title">Predefined Stylings</h6>
            <div className="inner-content-list">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                className="inner-content-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <button className="btn" onClick={myFunction} id="myBtn">
        <a href="#" className="option-button">
          <ion-icon name="settings-outline"></ion-icon>
        </a>
        <a href="#" className="option-button">
          <ion-icon name="heart-outline"></ion-icon>
        </a>
        <a href="#" className="option-button">
          <ion-icon name="book-outline"></ion-icon>
        </a>
        <a href="#" className="option-button">
          <ion-icon name="cart-outline"></ion-icon>
        </a>
      </button>
    </section>
  );
}
