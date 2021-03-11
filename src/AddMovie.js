import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [year, setYear] = useState("");

  const AddName = (e) => {
    setName(e.target.value);
  };
  const AddId = (e) => {
    setId(e.target.value);
  };
  const AddYear = (e) => {
    setYear(e.target.value);
  };
  const AddMovie = (e) => {
    e.preventDefault();
    setMovies();
  };
  return (
    <form>
      AddMovie
      <input type="id" name="id" placeholder="id" value={id} onChange={AddId} />
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={AddName}
      />
      <input
        type="year"
        name="year"
        placeholder="year"
        value={year}
        onChange={AddYear}
      />
      <button>submit</button>
    </form>
  );
}
export default AddMovie;
