import Backdrop from "@/app/movie/components/backdrop";
import MoviePageHeader from "@/app/movie/components/movie-page-header";
import MoviePoster from "@/app/movie/components/movie-poster";
import BookButton from "@/app/movie/components/book-button";
import MovieDetails from "@/app/movie/components/movie-details";

import { getMovieDetails } from "@/app/helpers/getMovieDetails";

interface MoviePageProps {
  params: {
    id: string;
  };
}

const MoviePage = async ({ params }: MoviePageProps) => {
  const response = await getMovieDetails({ movieId: params.id });
  const movie = response.data;

  return (
    <main className="to-primary from-secondary relative z-10 h-screen w-full items-center justify-center gap-20 bg-gradient-to-r md:flex md:h-auto md:min-h-screen md:flex-col md:p-20 xl:flex-row">
      <Backdrop backdrop_path={movie.backdrop_path} />
      <MoviePageHeader vote_average={movie.vote_average} />
      <div className="h-screen md:h-auto md:space-y-5">
        <MoviePoster
          poster_path={movie.poster_path}
          original_title={movie.original_title}
        />
        <BookButton className="hidden w-full md:flex" />
      </div>
      <div className="max-w-full overflow-hidden">
        <MovieDetails movie={movie} />
      </div>
    </main>
  );
};

export default MoviePage;
