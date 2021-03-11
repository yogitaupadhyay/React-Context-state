import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import "./App.css";

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1>MoviesList</h1>
      {movies.map((movie) => (
        <Movie name={movie.name} id={movie.id} year={movie.year} />
      ))}
    </div>
  );
}

export default MovieList;
