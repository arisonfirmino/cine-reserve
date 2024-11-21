import axios from "axios";

const api_key = process.env.TMDB_API_KEY;

export const getMovieCredits = async ({ movieId }: { movieId: string }) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`,
  );
};
