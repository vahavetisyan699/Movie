import React  from "react";
import SearchInput from "../components/SearchInput";
import { request } from "../providers/v.lib";
import { GET_MOVIES } from "../providers/const";
import MovieInfo from "../components/MovieInfo";

import { useState } from "react";

function Main() {
  const [movies, setMovie] = useState([]);

  function searchMovie(movieName) {
    request(GET_MOVIES(movieName), "GET")
      .then((result) => {
        setMovie(result.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="mainDiv">
      <header className = 'main-header'>
        <h1>Home page</h1>

        <div className="searchBar">
          <SearchInput searchMovie={searchMovie} />
        </div>
      </header>
      <div className="content">
        {movies
          .filter((movie) => movie.poster_path !== null)
          .map((movie, i) => (
            <MovieInfo key={i} movie={movie} />
          ))}
      </div>
    </div>
  );
}
export default Main;
