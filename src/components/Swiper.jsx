import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./Swiper.css";

SwiperCore.use([Navigation, Pagination]);

function CustomSwiper() {
  const slides = [];

  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        slide {i + 1}
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        tag="section"
        wrapperTag="ul"
        id="main"
        loop
        pagination
        spaceBetween={1}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
}

export default CustomSwiper;
