import React, { useContext } from "react";
import "./App.css";
import { MovieContext } from "./MovieContext";
import { Link } from "react-router-dom";
import AddMovie from "./AddMovie";

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1>Movies.com</h1>
      <ul>
        <Link to="/movieList">
          <li>MovieList</li>
        </Link>
      </ul>
      <h3>total number of movies :{movies.length} </h3>
      <AddMovie />
    </div>
  );
}

export default Nav;
