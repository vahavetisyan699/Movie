import React from "react";
import { withRouter } from "react-router";
import { GET_IMAGE } from "../providers/const";

function MovieInfo( props ) {
    
    const movie = props.movie
    const history = props.history
    function moreMovieInfo() {
        history.push(`/movie/${movie.id}`)
    }
  return (
    <div className = 'moviesDiv'>
      <div className="movieCard" onClick = {moreMovieInfo}>
        <img className="movieImg" src={GET_IMAGE(movie.poster_path)} alt="" />
        <p className="movieNameP"> {movie.title} </p>
      </div>
    </div>
  );
}
export default withRouter(MovieInfo);
