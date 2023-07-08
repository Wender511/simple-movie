import { Fragment } from "react";
import MovieCard from "./components/MovieCard/MovieCard";
import Banner from "./components/Banner/Banner";
import fetcher from "./utils/fetcher";

export default function App() {
  return (
    <Fragment>
      <header className="header flex justify-center items-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
      <MovieCard></MovieCard>
    </Fragment>
  );
}
