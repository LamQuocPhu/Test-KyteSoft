import React from "react";
import "../styles/FeaturePoppular.scss";

export default function FeaturePoppular(props) {
  const {title, subtitle} = props;
  return (
    <section>
      <div className="featurepop-wrapper">
        <div className="featurepop-title">
          <h2>{title}</h2>
          <div>{subtitle}</div>
        </div>
        <div className="featurepop-content-wrapper">
          <div className="featurepop-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg"
                alt="Tokyo"
                className="featurepop-img"
              />
            </a>
            <h3>Tokyo</h3>
            
          </div>
          <div className="featurepop-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg"
                alt="Tokyo"
                className="featurepop-img"
              />
            </a>
            <h3>Seoul</h3>
          </div>
          <div className="featurepop-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg"
                alt="Tokyo"
                className="featurepop-img"
              />
            </a>
            <h3>Paris</h3>
          </div>
          <div className="featurepop-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg"
                alt="Tokyo"
                className="featurepop-img"
              />
            </a>
            <h3>London</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
