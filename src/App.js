import React from "react";
import "./App.css";
import Nav from "./Nav";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <MovieProvider>
          <Nav />
          <Route path="/movieList" component={MovieList} />
        </MovieProvider>
      </Router>
    </div>
  );
}

export default App;
