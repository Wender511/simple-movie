import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { Swiper, SwiperSlide } from "swiper/react";
function Banner() {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=4948de824fd5a80039de945943575389`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem key={item.id} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
  function BannerItem({ item }) {
    const { title, poster_path } = item;
    return (
      <div className="w-full h-full rounded-lg bg-white relative">
        <div className="overlay absolute w-full h-full rounded-lg inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.3)]"></div>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
          alt=""
          className="w-full h-full rounded-lg object-cover"
        />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">{title}</h2>
          <div className="flex items-center gap-x-3 mb-6">
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
          </div>
          <button className="bg-primary py-3 px-6 font-medium text-white rounded-md">
            Watch Now
          </button>
        </div>
      </div>
    );
  }
}

export default Banner;
