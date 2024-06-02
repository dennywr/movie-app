import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Card({ movies }) {
  const { id } = useSelector((state) => state.movie.movie);
  const rating = useSelector((state) => state.rating.rating);
  const [storedRatings, setStoredRatings] = useState({});

  useEffect(() => {
    // Save rating to session storage whenever it changes
    if (rating !== null && id !== null) {
      sessionStorage.setItem(`rating_${id}`, rating);
    }
  }, [rating, id]);

  useEffect(() => {
    // Remove any invalid 'rating_undefined' key from session storage
    sessionStorage.removeItem("rating_undefined");

    // Load ratings from session storage when component mounts
    const ratings = {};
    movies.forEach((movie) => {
      const storedRating = sessionStorage.getItem(`rating_${movie.id}`);
      if (storedRating !== null) {
        ratings[movie.id] = storedRating;
      }
    });
    setStoredRatings(ratings);
  }, [movies]);

  return (
    <div className="flex flex-wrap justify-between gap-5 pb-5">
      {movies.map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          className="card card-compact relative w-[45%] bg-base-100 shadow-xl md:w-[30%] lg:w-1/5 xl:w-1/6"
        >
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="h-full w-full rounded-xl object-cover"
            />
          </figure>
          {/* rating */}
          {storedRatings[movie.id] && (
            <span className="absolute top-4 w-full bg-slate-800 px-3 py-1 text-center text-white opacity-70">
              Your rating: {storedRatings[movie.id]}
            </span>
          )}
          {/* end rating */}
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
