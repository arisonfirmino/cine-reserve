import { getPosterMovie } from "@/app/helpers/getPosterMovie";
import Image from "next/image";

interface MoviePosterProps {
  poster_path: string;
  original_title: string;
}

const MoviePoster = ({ poster_path, original_title }: MoviePosterProps) => {
  return (
    <div className="relative h-full w-full md:max-h-[450px] md:min-h-[450px] md:min-w-[300px] md:max-w-[300px]">
      <Image
        src={getPosterMovie({ posterPath: poster_path })}
        alt={original_title}
        fill
        className="object-contain object-top md:rounded-3xl"
      />
    </div>
  );
};

export default MoviePoster;
