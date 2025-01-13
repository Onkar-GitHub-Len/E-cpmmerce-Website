import React, { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { sliderItems } from "../../data";
import "./Slider.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    } else {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }

    console.log(slideIndex);
  };

  return (
    <div className="slider-container">
      <div
        className="arrow"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <IoMdArrowDropleft className="icon" />
      </div>

      <div
        className="slider-wrapper"
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="slide"
            style={{ backgroundColor: `#${item.bg}` }}
          >
            <div className="img-container">
              <img src={item.img} alt="" className="img" />
            </div>
            <div className="info-container">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <button className="button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="arrow"
        direction="right"
        onClick={() => handleClick("right")}
      >
        <IoMdArrowDropright className="icon" />
      </div>
    </div>
  );
};

export default Slider;
