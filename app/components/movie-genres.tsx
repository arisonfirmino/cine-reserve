import { MovieGenresProps } from "@/types";

const MovieGenres = ({ genres }: MovieGenresProps) => {
  return (
    <div className="flex gap-2.5">
      {genres.map((genre) => (
        <span
          key={genre.name}
          className="rounded-full bg-white bg-opacity-30 px-2.5 pb-0.5 text-sm"
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default MovieGenres;
