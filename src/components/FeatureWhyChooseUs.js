import React from "react";
import '../styles/FeatureWhyChooseUs.scss'

export default function FeatureWhyChooseUs(props) {
  const {title, subtitle} = props;

  return (
    <section>
      <div className="feature-wrapper">
        <div className="feature-title">
          <h2>{title}</h2>
          <div>{subtitle}</div>
        </div>
        <div className="feature-content-wrapper">
          <div className="feature-content">
            <div>
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
                alt="Handpicked Hotels"
                className="feature-img"
              />
            </div>
            <h4><strong>Handpicked Hotels</strong></h4>
            <p>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
            </p>
          </div>
          <div className="feature-content">
            <div href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
                alt="French Autumn"
                className="feature-img"
              />
            </div>
            <h4><strong>World Class Service</strong></h4>
            <p>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
            </p>
          </div>
          <div className="feature-content">
            <div href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
                alt="French Autumn"
                className="feature-img"
              />
            </div>
            <h4><strong>Best Price Guarantee</strong></h4>
            <p>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
