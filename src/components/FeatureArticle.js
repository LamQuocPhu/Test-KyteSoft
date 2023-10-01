import React from "react";
import "../styles/FeatureArticle.scss";
import Title from "./Title";

export default function FeatureArticle(props) {
  const { info, Article } = props;
  return (
    <section>
      <div className="featurearticle-wrapper">
        <Title info={info.filter((item) => item.type === "article")} />
        <div className="featurearticle-content-wrapper">
          {Article.map((item) => {
            return (
              <div className="featurearticle-content">
                <a href="#">
                  <img
                    src={item.imgsrc}
                    alt={item.imgalt}
                    className="featurearticle-img"
                  />
                </a>
                <div className="post-details">
                  <div className="post-details-day">
                    <a href="#">{item.postdetailDay}</a>
                  </div>
                  <h6 className="post-details-h6">
                    <a href="#">{item.postdetailTitleDescription}</a>
                  </h6>
                  <p className="post-details-p">
                    {item.postdetailDescription}
                  </p>
                  <div className="read-more">
                    <a href="#">
                      Read More <i className="fa fa-angle-right"></i>
                    </a>
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
