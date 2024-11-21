import MoviesList from "@/app/(home)/components/movies-list";

import { getNowPlayingMovies } from "@/app/helpers/getNowPlayingMovies";

const Home = async () => {
  const response = await getNowPlayingMovies();
  const movies = response.data.results;

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
