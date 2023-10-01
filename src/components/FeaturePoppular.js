import React from "react";
import "../styles/FeaturePoppular.scss";
import Title from "./Title";

export default function FeaturePoppular(props) {
  const { Popular, info } = props;
  
  return (
    <section>
      <div className="featurepop-wrapper">
        <Title info={info.filter((item) => item.type === "popular")} />
        <div className="featurepop-content-wrapper">
          {Popular.map((item) => {
            return (
              <div className="featurepop-content">
                <a href="#">
                  <img src={item.imgsrc} alt="Tokyo" className="featurepop-img" />
                </a>
                <h3>{item.imgtitle}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
