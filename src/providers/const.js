/**created by v
 * 04-05-2021
 * 9:49 PM
 */


const api_key = `1a5086c98e86970276abfda2a218703c`;

const host = `https://api.themoviedb.org/3`
export const GET_MOVIES = name => `${host}/search/movie?api_key=${api_key}&query=${name}`;
export const GET_IMAGE = background => `https://www.themoviedb.org/t/p/w220_and_h330_face${background}`;

export const GET_MOVIE_DEATAILS = id => `${host}/movie/${id}?api_key=${api_key}`;

export const GET_MOVIE_VIDEOS = id => `${host}/movie/${id}/videos?api_key=${api_key}`

export const GET_MOVIE_CREDITS = id => `${host}/movie/${id}/credits?api_key=${api_key}`

export const GET_MOVIE_VIDEOS_LINK = key => `https://www.youtube.com/embed/${key}`