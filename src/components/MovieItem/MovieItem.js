function MovieItem() {
  return (
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
  );
}

export default MovieItem;
