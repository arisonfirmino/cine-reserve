import Image from "next/image";
import Link from "next/link";

import { getPosterMovie } from "@/app/helpers/getPosterMovie";

import { MoviesListProps } from "@/types";

const MoviesList = ({ movies }: MoviesListProps) => {
  console.log(movies);

  return (
    <>
      <div className="flex gap-5 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`} prefetch>
            <div className="relative h-[400px] min-w-[300px] max-w-[300px]">
              <Image
                src={getPosterMovie({ posterPath: movie.poster_path })}
                alt={movie.original_title}
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MoviesList;
