import React, { useEffect, useState } from "react";
import {
  GET_MOVIE_CREDITS,
  GET_MOVIE_DEATAILS,
  GET_MOVIE_VIDEOS,
  GET_IMAGE, GET_MOVIE_VIDEOS_LINK
} from "../providers/const";
import { request } from "../providers/v.lib";

export default function Movie({ match, history }) {
  const [movieId, setMovieId] = useState(match.params.id);
  const [details, setDetails] = useState();
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    req(movieId)
  }, []);

  function goBack (){
    history.push('/')
  }

  function req(movieId) {
    request(GET_MOVIE_DEATAILS(movieId), "GET")
      .then((result) => {
        setDetails(result)
      })
    request(GET_MOVIE_CREDITS(movieId), 'GET')
      .then((result) => {
        setCredits(result.cast)
      })
    request(GET_MOVIE_VIDEOS(movieId), 'GET')
      .then((result) => {
        setVideos(result.results)
      })
  }
  if (details == undefined) {
    return <h5 style={{ color: 'white' }}>Loading...</h5>
  }
  return (
    <div className="movie-page-div">
      <button onClick = {goBack}>Go back</button>
      <div className="movie-details">
        <img src={GET_IMAGE(details.poster_path)} alt="1" />
        <h2 className='movieName'>{details.title} : {details.release_date}</h2>
        <p>{details.overview}</p>
      </div>
      <h1 className = 'credits'>Credits</h1>
      <div className="movie-credits">
        {

          credits.filter((movie) => movie.profile_path !== null)
            .map((el, i) => {
              return (
                <>
                  <div className='movie-credits-div'>
                    <div>
                      <img src={GET_IMAGE(el.profile_path)} alt="" />
                      <p className='credit-name'>{el.name}</p>
                    </div>
                  </div>
                </>
              )
            })
        }
      </div>
      <h1 className = 'treiler'>Treiler</h1>
      <div className="movie-videos-div">
        {
          videos.filter((video) => video.key !== null)
            .map((el, i) => {
              return (
                <>
                  <iframe key={i} allowFullScreen src={GET_MOVIE_VIDEOS_LINK(el.key)} frameborder="0"></iframe>
                </>
              )
            })
        }
      </div>
    </div>
  )
}