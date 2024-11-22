"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";

import { getPosterMovie } from "@/app/helpers/getPosterMovie";

interface MoviePosterProps {
  id: string;
  poster_path: string;
  original_title: string;
}

const MoviePoster = ({ id, poster_path, original_title }: MoviePosterProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`relative ${pathname === `/movie/${id}` ? "h-full w-full md:max-h-[450px] md:min-h-[450px] md:min-w-[300px] md:max-w-[300px]" : "max-h-[450px] min-h-[450px] min-w-[300px] max-w-[300px]"}`}
    >
      <Image
        src={getPosterMovie({ posterPath: poster_path })}
        alt={original_title}
        fill
        className="object-contain object-top"
      />
    </div>
  );
};

export default MoviePoster;
