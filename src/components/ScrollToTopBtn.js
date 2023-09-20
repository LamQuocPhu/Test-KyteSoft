import React, { useState, useEffect } from "react";
import { FaArrowCircleUp, FaAngleUp } from "react-icons/fa";
import "../styles/ScrollToTopBtn.scss";
import { Button } from "bootstrap";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btn">
      {visible && (
        <button onClick={goToTop} className="icon-position  myStyleBtn">
        <i className="fa fa-angle-up"></i>
        </button>
      )}
      
    </div>
  );
}
