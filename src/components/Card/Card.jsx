import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Card({ movies }) {
  return (
    <div className="flex flex-wrap justify-between gap-5 pb-5">
      {movies.map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          className="card card-compact w-[45%] bg-base-100 shadow-xl md:w-[30%] lg:w-1/5 xl:w-1/6"
        >
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="Shoes"
              className="h-full w-full rounded-xl object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <div className="card-actions justify-between">
              <div className="flex items-center gap-2 text-xl font-bold text-[#FFBF00]">
                <FaStar color="#FFBF00" />
                {movie.vote_average}
              </div>
              <div className="text-xl">{movie.release_date.split("-")[0]}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
