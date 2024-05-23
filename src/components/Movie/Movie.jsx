import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

export default function Movie() {
  const id = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovieDetail() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id.id}?api_key=efa19839be433f24324740ff607f44d1`,
        );
        const data = res.data;
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error("Can't fetch movie detail");
      }
    }

    fetchMovieDetail();
  }, [id]);
  return (
    <div className="container mx-auto h-screen px-20">
      <Header />

      <div className="breadcrumbs mb-5 mt-10 text-sm font-semibold">
        <ul className="text-xl">
          <li className="text-blue-500">
            <a
              href="/"
              className="no-underline hover:no-underline hover:opacity-80"
            >
              Discover Movie
            </a>
          </li>
          <li>{movie.title}</li>
        </ul>
      </div>

      <div className="container  h-screen">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="Movie"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-2xl">{movie.title}</h1>
            <p>
              {movie.release_date} •{" "}
              {movie.genres &&
                movie.genres.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index < movie.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
            </p>

            <h2 className="font-bold">Overview</h2>
            <p>{movie.overview ? movie.overview : "-"}</p>

            <h2 className="font-bold">Tagline</h2>
            <p>{movie.tagline ? movie.overview : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
