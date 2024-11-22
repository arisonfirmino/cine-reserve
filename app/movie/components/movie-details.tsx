import MovieDuration from "@/app/movie/components/movie-duration";
import MovieGenres from "@/app/components/movie-genres";
import MovieSinopse from "@/app/movie/components/movie-sinopse";
import MovieCast from "@/app/movie/components/movie-cast";
import BookButton from "@/app/movie/components/book-button";

import { DotIcon } from "lucide-react";

import { MovieDetailsProps } from "@/types";

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <div className="absolute bottom-0 flex aspect-square w-full flex-col items-center justify-center gap-5 rounded-t-[56px] bg-gradient-to-r from-secondary to-primary md:relative md:aspect-auto md:items-start md:rounded-none md:bg-none">
      <div className="flex flex-col items-center gap-2.5 px-5 md:flex-row md:px-0">
        <MovieDuration runtime={movie.runtime} />
        <DotIcon size={30} className="hidden md:flex" />
        <h2 className="order-1 text-center text-3xl font-bold md:order-[-1]">
          {movie.original_title}
        </h2>
      </div>
      <MovieGenres genres={movie.genres} />
      <p className="hidden text-gray-300 md:line-clamp-none md:flex">
        {movie.tagline}
      </p>
      <MovieCast movieId={movie.id} />
      <MovieSinopse overview={movie.overview} />
      <BookButton className="flex md:hidden" />
    </div>
  );
};

export default MovieDetails;
