import React from "react";

export default function Features() {
  return (
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
            <img src="https://images.unsplash.com/photo-1682695795557-17447f921f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" alt="" className="img"/>
        </div>
      </div>
    </div>
  );
}
