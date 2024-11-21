import axios from "axios";

const api_key = process.env.TMDB_API_KEY;

export const getNowPlayingMovies = async () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=pt-BR&include_adult=true&include_video=true`,
  );
};
