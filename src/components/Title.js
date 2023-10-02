import React from "react";

export default function Title(props) {
  const { info } = props;
  
  return (
    <>
      {info.map((e) => {
        return (
          <div className="featurepop-title">
            <h2>{e.title}</h2>
            <div>{e.subtitle}</div>
          </div>
        );
      })}
    </>
  );
}
