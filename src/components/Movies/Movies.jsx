import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortedOption, setSortedOption] = useState("mostPopular");
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=efa19839be433f24324740ff607f44d1`,
        );
        const data = res.data.results;
        setMovies(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchMovies();
  }, []);

  const sortedMovie = [...movies].sort((a, b) => {
    if (sortedOption === "mostPopular") {
      return b.popularity - a.popularity;
    }
    return a.popularity - b.popularity;
  });
  return (
    <>
      <Header />

      <div className="mt-10">
        <div className="flex justify-between">
          <h1 className="mb-10 text-3xl font-bold">Discover movie</h1>
          <select
            value={sortedOption}
            onChange={(e) => setSortedOption(e.target.value)}
            className="select w-40 max-w-xs"
          >
            <option value="mostPopular">Most popular</option>
            <option value="lessPopular">Less popular</option>
          </select>
        </div>
        <div className="flex">
          {isLoading && !isError && <Loader />}
          {isError && <Message />}
          {!isLoading && !isError && <Card movies={sortedMovie} />}
        </div>
      </div>
    </>
  );
}
