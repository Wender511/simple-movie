import Banner from "../components/Banner/Banner";
import MovieCard from "../components/MovieCard/MovieCard";

function HomePage() {
  return (
    <>
      <Banner></Banner>
      <MovieCard></MovieCard>
      <MovieCard type="top_rated"></MovieCard>
      <MovieCard type="popular"></MovieCard>
    </>
  );
}

export default HomePage;
