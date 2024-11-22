import Nav from "@/app/(home)/components/nav";

import { getNowPlayingMovies } from "@/app/helpers/getNowPlayingMovies";
import MoviesList from "./components/movies-list";

const Home = async () => {
  const response = await getNowPlayingMovies();
  const movies = response.data.results;

  return (
    <main className="min-h-screen w-full flex-col bg-gradient-to-r from-secondary to-primary md:flex md:justify-center">
      <Nav />
      <div className="space-y-5 md:py-20">
        <div className="px-10 pt-10 md:pt-0">
          <h3 className="text-xl font-bold uppercase">Filmes em cartaz</h3>
        </div>

        <MoviesList movies={movies} />
      </div>
    </main>
  );
};

export default Home;
