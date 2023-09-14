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
    
    </div>

    </section>
  );
}
