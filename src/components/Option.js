import React from "react";
import '../styles/Option.scss';

export default function Option() {
  return (
    <section className="option-wrapper">
        <div className="inner">
          <div className="inner-content">
            <h6 className="inner-content-title">
              Created With Grand Tour
            </h6>
            <p className="inner-content-describre">
              We designed Grand Tour theme to make it works especially for tour & travel site. Here are a few included examples that you can import with one click.
            </p>
            <ul className="inner-content-list">
              <li>
                <img/>
              </li>
              <li>
                <img/>
              </li>
            </ul>
            <h6 className="inner-content-title">
              Predefined Colors
            </h6>
            <ul className="inner-content-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <h6 className="inner-content-title">
              Predefined Stylings
            </h6>
            <ul className="inner-content-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
    </section>
  );
}
