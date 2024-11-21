import axios from "axios";

const api_key = process.env.TMDB_API_KEY;

export const getMovieDetails = ({ movieId }: { movieId: string }) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=pt-BR`,
  );
};
