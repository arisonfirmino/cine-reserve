export const getMemberImage = ({ profilePath }: { profilePath: string }) => {
  return `https://image.tmdb.org/t/p/original${profilePath}`;
};
