"use client";

import { useState } from "react";

import MoviePoster from "@/app/components/movie-poster";
import SeeMoreButton from "@/app/components/see-more-button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { MoviesListProps } from "@/types";

const MoviesList = ({ movies }: MoviesListProps) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
      >
        {movies.map((movie, index) => (
          <SwiperSlide
            key={movie.id}
            style={{
              width: "auto",
              scale: active === index ? "" : ".85",
            }}
          >
            <MoviePoster
              id={movie.id}
              poster_path={movie.poster_path}
              original_title={movie.original_title}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="dura flex flex-col items-center gap-5">
        <h2 className="text-xl font-bold">{movies[active]?.original_title}</h2>
        <SeeMoreButton id={movies[active]?.id} />
      </div>
    </>
  );
};

export default MoviesList;
