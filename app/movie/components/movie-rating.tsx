import { StarIcon } from "lucide-react";

const MovieRating = ({ vote_average }: { vote_average: number }) => {
  return (
    <span className="flex h-10 items-center justify-center gap-2.5 rounded-full bg-white bg-opacity-30 px-5">
      <StarIcon size={16} className="fill-yellow-500 text-yellow-500" />
      {vote_average}
    </span>
  );
};

export default MovieRating;
