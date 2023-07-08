import MovieItem from "../MovieItem/MovieItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
function MovieCard() {
  return (
    <div className="movie-card pb-20 page-container">
      <h2 className="capitalize text-white mb-5 text-3xl font-bold">
        Now playing
      </h2>
      <div className="movie-list  text-white">
        <Swiper spaceBetween={40} grabCursor={true} slidesPerView={4}>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem></MovieItem>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MovieCard;
