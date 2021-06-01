import React, { useEffect, useState } from "react";
import {
    GET_MOVIE_VIDEOS,
    GET_MOVIE_VIDEOS_LINK
} from "../providers/const";
import { request } from "../providers/v.lib";

export default function Trailer({ match,history }) {
    const [movieId, setMovieId] = useState(match.params.id);
    const [videos, setVideos] = useState({});
    useEffect(() => {
        req(movieId)
    }, []);

    function req(movieId) {
        request(GET_MOVIE_VIDEOS(movieId), 'GET')
            .then((result) => {
                setVideos(result.results[0])
                console.log(result.results);
            })
    }
    function goBack() {
        history.push(`/movie/${movieId}`)
    }
    return (
        <>
            <div className='movie-trailer-div'>
                <button onClick={goBack}>Go Back</button>
                
                {
                    <iframe allowFullScreen className='trailer' src={GET_MOVIE_VIDEOS_LINK(videos.key)} frameborder="0"></iframe>
                }
            </div>
        </>
    )
}
