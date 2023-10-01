import React from "react";
import "../styles/FeatureWhyChooseUs.scss";
import Title from "./Title";

export default function FeatureWhyChooseUs(props) {
  const { info, Whychooseus } = props;

  return (
    <section>
      <div className="feature-wrapper">
        <Title info={info.filter((item) => item.type === "why")} />
        <div className="feature-content-wrapper">
          {Whychooseus.map((e) => {
            return (
              <div className="feature-content">
                <img
                  src={e.imgsrc}
                  alt={e.imgalt}
                  className="feature-img"
                />
                <h4>
                  {e.title}
                </h4>
                <p>
                  {e.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
