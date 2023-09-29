import React from "react";
import '../styles/FeatureBestValue.scss'

export default function FeatureBestValue(props) {
  const {title, subtitle} = props;

  return (
    <section>
      <div className="featureval-wrapper">
        <div className="featureval-title">
          <h2>{title}</h2>
          <div>{subtitle}</div>
        </div>
        <div className="featureval-content-wrapper">
          <div className="featureval-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
                alt="French Autumn"
                className="featureval-img"
              />
            </a>
            <div className="tour-info">
                <h4>French Autumn</h4>
                <p>City Tours, Urban</p>
                <div className="tour-price">$5,000</div>
                <div className="tour-attribute-wrapper">
                    <div className="tour-attribute-rating">
                        <div className="tour-attribute-rating-star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i style={{color:"#ccc"}} className="fa fa-star-o"></i>
                        </div>
                        <div className="tour-attribute-rating-count">
                            4 reviews
                        </div>
                    </div>
                    <div className="tour-attribute-days">
                      <ion-icon name="time-outline"></ion-icon>5 days
                    </div>
                </div>
            </div>
          </div>
          <div className="featureval-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                alt="Tokyo"
                className="featureval-img"
              />
            </a>
            <div className="tour-info">
                <h4>Grand Switzerland</h4>
                <p>Shopping, Mountain, Snow & Ice</p>
                <div className="tour-price">$6,000</div>
                <div className="tour-attribute-wrapper">
                    <div className="tour-attribute-rating">
                        <div className="tour-attribute-rating-star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i style={{color:"#ccc"}} className="fa fa-star-o"></i>
                        </div>
                        <div className="tour-attribute-rating-count">
                            4 reviews
                        </div>
                    </div>
                    <div className="tour-attribute-days">
                      <ion-icon name="time-outline"></ion-icon>6 days
                    </div>
                </div>
                
            </div>
          </div>
          <div className="featureval-content">
            <a href="#">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                alt="Discover Japan"
                className="featureval-img"
              />
            </a>
            <div className="sale-label">Sale</div>
            <div className="tour-info">
                <h4>Discover Japan</h4>
                <p>City Tours, Iconic</p>
                <div className="tour-price">
                  <span>$3,000</span>
                  $2,500</div>
                <div className="tour-attribute-wrapper">
                    <div className="tour-attribute-rating">
                        <div className="tour-attribute-rating-star">
                          <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i style={{color:"#ccc"}} className="fa fa-star-o"></i>
                        </div>
                        <div className="tour-attribute-rating-count">
                            4 reviews
                        </div>
                    </div>
                    <div className="tour-attribute-days">
                      <ion-icon name="time-outline"></ion-icon>5 days
                    </div>
                </div>
                
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
