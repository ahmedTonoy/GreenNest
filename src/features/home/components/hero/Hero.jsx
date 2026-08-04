import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import heroSlides from "../../data/heroSlides";
import HeroSlide from "./HeroSlide";

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      spaceBetween={16}
      autoplay={{ delay: 5500, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <HeroSlide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
