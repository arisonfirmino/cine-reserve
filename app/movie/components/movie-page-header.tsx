import CloseButton from "@/app/components/close-button";
import MovieRating from "@/app/movie/components/movie-rating";

const MoviePageHeader = ({ vote_average }: { vote_average: number }) => {
  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-5 pt-5">
      <CloseButton />
      <MovieRating vote_average={vote_average} />
    </header>
  );
};

export default MoviePageHeader;
