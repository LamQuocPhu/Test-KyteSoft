import React from "react";

export default function Features() {
  return (
    <section>
    <div className="feature1">
      <div className="standard-wrapper">
        <div className="featuer1-content">
          <h2>Popular Destinations</h2>
          <div className="standard-wrapper-tagline-feature1">
            World's best tourist destinations
          </div>
        </div>
      </div>
      <div className="destination-grid">
        <div className="destination-grid-item">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg" alt="" className="destination-grid-img"/>
            <h3>Tokyo</h3>
        </div>
        <div className="destination-grid-item">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg" alt="" className="destination-grid-img"/>
            <h3>Seoul</h3>
        </div>
        <div className="destination-grid-item">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg" alt="" className="destination-grid-img"/>
            <h3>Paris</h3>
        </div>
        <div className="destination-grid-item">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg" alt="" className="destination-grid-img"/>
            <h3>London</h3>
        </div>
      </div> 
    </div>
    <div className="feature1">
      <div className="standard-wrapper">
        <div className="featuer1-content">
          <h2>Best Value Trips</h2>
          <div className="standard-wrapper-tagline-feature1">
            Best offers trips from us
          </div>
        </div>
      </div>
      <div className="destination-grid2">
        <div className="destination-grid-item2">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg" alt="" className="destination-grid-img"/>
            <div className="portfolio">
                <h4>French Autumn</h4>
                <p>City tours, Urban</p>
                <div className="review">
                    <div className="rate">
                    <span style={co}><ion-icon name="star-outline"></ion-icon></span>
                    </div>
                    <div className="count-review"></div>
                    <div className="tour-days"></div>
                </div>
            </div>
        </div>
        <div className="destination-grid-item2">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg" alt="" className="destination-grid-img"/>

        </div>
        <div className="destination-grid-item2">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg" alt="" className="destination-grid-img"/>

        </div>
      </div> 
    </div>

    </section>
  );
}
