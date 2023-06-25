import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Virtual,
  Mousewheel,
  EffectFade,
} from "swiper";
// import "swiper/css/scrollbar";

const Experiment = () => {
  return (
    <div>
      <hr className="border-red-500 border-spacing-9 my-5" />
      <div className="text-5xl font-bold flex justify-center m-10 text-gray-600">
        Slider
      </div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Keyboard,
          Virtual,
          Mousewheel,
          EffectFade,
        ]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        keyboard // Enable keyboard control
        virtual // Enable virtual slides
        mousewheel // Enable mousewheel control
        effect="fade" // Set the fade effect
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center font-semibold text-3xl bg-red-300 p-24 mb-7">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center font-semibold text-3xl bg-green-300 p-24 mb-7">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center font-semibold text-3xl bg-yellow-300 p-24 mb-7">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center font-semibold text-3xl bg-purple-300 p-24 mb-7">
            Slide 4
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center font-semibold text-3xl bg-pink-500 p-24">
            Slide 5
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center font-semibold text-3xl bg-blue-300 p-24 mb-7">
            Slide 6
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Experiment;
