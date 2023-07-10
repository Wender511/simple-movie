import { useNavigate } from "react-router-dom";
function MovieItem({ movie }) {
  const navigate = useNavigate();
  const { title, vote_average, release_date, poster_path, id } = movie;
  return (
    <div className="movie-item flex flex-col p-3 bg-slate-800 rounded-lg h-full select-none text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] rounded-lg object-cover mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="font-bold text-xl mb-3">{title}</h3>
        <div className="flex justify-between items-center text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button
          className="capitalize bg-primary w-full py-3 px-6 rounded-lg text-xl mt-auto"
          onClick={() => navigate(`/movies/${id}`)}
        >
          Watch now
        </button>
      </div>
    </div>
  );
}

export default MovieItem;
