function Banner() {
  return (
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
  );
}

export default Banner;
