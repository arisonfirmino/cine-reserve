export const getPosterMovie = ({ posterPath }: { posterPath: string }) => {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
};
