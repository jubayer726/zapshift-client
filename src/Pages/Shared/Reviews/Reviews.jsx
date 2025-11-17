import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import customertop from '../../../assets/customer-top.png'
import ReviewCart from "./ReviewCart";

const Reviews = ({ ReviewsPromise }) => {
  const reviewsData = use(ReviewsPromise);
  return (
    <div className="py-15">
      <div className="text-container text-secondary text-center p-5">
        <img src={customertop} alt="" className="mx-auto"/>
        <h1 className="text-3xl font-bold m-5">What our customers are sayings</h1>
        <p className="text-sm my-5 ">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      </div>
        <Swiper
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            reviewsData.map(reviews=><SwiperSlide key={reviews.id}>
            <ReviewCart reviews={reviews}></ReviewCart>
          </SwiperSlide>)
          }
          
        </Swiper>
     
    </div>
  );
};

export default Reviews;
