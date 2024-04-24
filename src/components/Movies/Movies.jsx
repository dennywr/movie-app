import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=efa19839be433f24324740ff607f44d1`,
        );
        const data = res.data.results;
        setMovies(data);
      } catch (error) {
        console.error("Error white fetching data!");
      }
    }
    fetchMovies();
  }, []);
  return (
    <div className="mt-10">
      <h1 className="mb-10 text-3xl font-bold">Discover movie</h1>
      <div className="flex">
        <Card movies={movies} />
      </div>
    </div>
  );
}
