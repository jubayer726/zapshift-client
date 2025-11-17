import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";

const Brand = () => {
  const brandLogo = [
    amazon,
    amazon_vector,
    casio,
    moonstar,
    randstad,
    star,
    start_people,
    amazon_vector,
  ];
  return (
    <div>
      <h1 className="text-3xl text-center font-bold pt-15 text-secondary">
        We've helped thousands of sales teams
      </h1>
      <div className="py-15">
        <Swiper
          slidesPerView={4}
          loop={brandLogo.length > 4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {brandLogo.map((logo, i) => (
            <SwiperSlide key={i}>
              <img src={logo} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
