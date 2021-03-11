import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Spider Man",
      id: "1000",
      year: 2005,
    },
    {
      name: "Super Man",
      id: "1001",
      year: 2008,
    },
    {
      name: "Bat Man",
      id: "1002",
      year: 2010,
    },
  ]);

  return (
    // <MovieContext.Provider>
    // <Nav/>
    // <Route/>
    //   </MovieContext>

    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
