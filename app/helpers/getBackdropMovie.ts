export const getBackdropMovie = ({
  backdropPath,
}: {
  backdropPath: string;
}) => {
  return `https://image.tmdb.org/t/p/original${backdropPath}`;
};
