import React from "react";
import "../styles/FeatureArticle.scss";

export default function FeatureArticle(props) {
  const {title, subtitle} = props;
  return (
    <section>
      <div className="featurearticle-wrapper">
        <div className="featurearticle-title">
          <h2>{title}</h2>
          <div>{subtitle}</div>
        </div>
        <div className="featurearticle-content-wrapper">
          <div className="featurearticle-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                alt="Memorial Day to Someone Told Me to Travel"
                className="featurearticle-img"
              />
            </a>
            <div className="post-details">
              <div className="post-details-day">
                <a href="#">DECEMBER 10, 2016</a>
              </div>
              <h6 className="post-details-h6">
                <a href="#">Memorial Day to Someone Told Me to Travel</a>
              </h6>
              <p className="post-details-p">
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache...
              </p>
              <div className="read-more">
                <a href="#">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="featurearticle-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
                alt="7 Tips For Nomads On A Budget Trips"
                className="featurearticle-img"
              />
            </a>
            <div className="post-details">
              <div className="post-details-day">
                <a href="#">DECEMBER 10, 2016</a>
              </div>
              <h6 className="post-details-h6">
                <a href="#">7 Tips For Nomads On A Budget Trips</a>
              </h6>
              <p className="post-details-p">
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache...
              </p>
              <div className="read-more">
                <a href="#">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="featurearticle-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
                alt="Taking A Travel Blog Victory Lap"
                className="featurearticle-img"
              />
            </a>
            <div className="post-details">
              <div className="post-details-day">
                <a href="#">DECEMBER 10, 2016</a>
              </div>
              <h6 className="post-details-h6">
                <a href="#">Taking A Travel Blog Victory Lap</a>
              </h6>
              <p className="post-details-p">
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache...
              </p>
              <div className="read-more">
                <a href="#">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
