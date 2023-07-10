import MovieItem from "../MovieItem/MovieItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import fetcher from "../../utils/fetcher";
import useSWR from "swr";
import "swiper/scss";
import formatTitle from "../../utils/formatName";
function MovieCard({ type = "now_playing" }) {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=4948de824fd5a80039de945943575389`,
    fetcher
  );
  const movies = data?.results || [];
  if (data?.success === false) {
    console.log("failed");
    return null; // Không có dữ liệu, không render component
  }
  return (
    <div className="movie-card pb-20 page-container">
      <h2 className="capitalize text-white mb-5 text-3xl font-bold">
        {formatTitle(type)}
      </h2>
      <div className="movie-list">
        <Swiper spaceBetween={40} grabCursor={true} slidesPerView={4}>
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieItem movie={movie}></MovieItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieCard;
