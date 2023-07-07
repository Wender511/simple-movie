import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <header className="header flex justify-center items-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg bg-white relative">
          <div className="overlay absolute w-full h-full rounded-lg inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.3)]"></div>
          <img
            src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avenger: Endgame</h2>
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
      </section>
      <div className="movie-card pb-20 page-container">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Now playing
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10 text-white">
          <div className="movie-item p-3 rounded-lg">
            <img
              src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="font-bold text-xl mb-3">Spiderman: Homecoming</h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="capitalize bg-primary w-full py-3 px-6 rounded-lg text-xl">
              Watch now
            </button>
          </div>
          <div className="movie-item p-3 rounded-lg">
            <img
              src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="font-bold text-xl mb-3">Spiderman: Homecoming</h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="capitalize bg-primary w-full py-3 px-6 rounded-lg text-xl">
              Watch now
            </button>
          </div>
          <div className="movie-item p-3 rounded-lg">
            <img
              src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="font-bold text-xl mb-3">Spiderman: Homecoming</h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="capitalize bg-primary w-full py-3 px-6 rounded-lg text-xl">
              Watch now
            </button>
          </div>
          <div className="movie-item p-3 rounded-lg">
            <img
              src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="font-bold text-xl mb-3">Spiderman: Homecoming</h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="capitalize bg-primary w-full py-3 px-6 rounded-lg text-xl">
              Watch now
            </button>
          </div>
          <div className="movie-item p-3 rounded-lg">
            <img
              src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="font-bold text-xl mb-3">Spiderman: Homecoming</h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="capitalize bg-primary w-full py-3 px-6 rounded-lg text-xl">
              Watch now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
