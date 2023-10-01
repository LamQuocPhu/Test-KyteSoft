import React from "react";
import "../styles/FeatureBestValue.scss";
import Title from "./Title";

export default function FeatureBestValue(props) {
  const { info, BestValue } = props;

  return (
    <section>
      <div className="featureval-wrapper">
        <Title info={info.filter((item) => item.type === "value")} />
        <div className="featureval-content-wrapper">
          {BestValue.map((e) => {
            return (
              <div className="featureval-content" >
                <a href="#">
                  <img
                    src={e.imgsrc}
                    alt={e.imgalt}
                    className="featureval-img"
                  />
                </a>
                <div className="sale-label">{e.toursaleicon}</div>
                <div className="tour-info">
                  <h4>{e.tourname}</h4>
                  <p>{e.tourplace}</p>
                  <div className="tour-price">
                    <span>{e.tourpricediscount}</span>
                    {e.tourprice}
                  </div>
                  <div className="tour-attribute-wrapper">
                    <div className="tour-attribute-rating">
                      <div className="tour-attribute-rating-star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i
                          style={{ color: "#ccc" }}
                          className="fa fa-star-o"
                        ></i>
                      </div>
                      <div className="tour-attribute-rating-count">
                        {e.tourratingcount}
                      </div>
                    </div>
                    <div className="tour-attribute-days">
                      <ion-icon name="time-outline"></ion-icon>
                      {e.tourday}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
