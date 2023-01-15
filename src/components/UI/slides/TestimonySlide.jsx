import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.scss";

const TestimonySlide = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          repellendus dolores ad, a veniam dolore pariatur accusantium
          consequatur esse eligendi animi labore at quaerat unde quis beatae
          explicabo, tempora ex saepe error minus distinctio aliquid harum? Sed,
          incidunt!"
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          repellendus dolores ad, a veniam dolore pariatur accusantium
          consequatur esse eligendi animi labore at quaerat unde quis beatae
          explicabo, tempora ex saepe error minus distinctio aliquid harum? Sed,
          incidunt!"
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Nkiru Uka</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          repellendus dolores ad, a veniam dolore pariatur accusantium
          consequatur esse eligendi animi labore at quaerat unde quis beatae
          explicabo, tempora ex saepe error minus distinctio aliquid harum? Sed,
          incidunt!"
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>David Jones</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonySlide;
