import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import Rating from "../Rating/Rating";
import { FaRegStar } from "react-icons/fa";
import { fetchMovieById } from "../../features/movie/movieSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Movie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movie);
  const isLoading = useSelector((state) => state.movie.isLoading);
  const isError = useSelector((state) => state.movie.isError);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

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
      {isLoading && !isError && <Loader />}
      {isError && <Message />}
      {!isLoading && !isError && (
        <div className="container h-screen">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/3">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="Movie"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2">
                <h1 className="card-title text-2xl">{movie.title}</h1>
                <div
                  className="cursor-pointer rounded-lg bg-slate-200 p-2"
                  onClick={() => setIsHidden(!isHidden)}
                >
                  <FaRegStar size={20} />
                </div>
                <Rating display={isHidden ? "hidden" : ""} />
              </div>
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
      )}
    </div>
  );
}
