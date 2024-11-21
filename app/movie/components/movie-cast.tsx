import MemberCast from "@/app/movie/components/member-cast";

import { getMovieCredits } from "@/app/helpers/getMovieCredits";

import { MemberProps } from "@/types";

const MovieCast = async ({ movieId }: { movieId: string }) => {
  const response = await getMovieCredits({ movieId: movieId });
  const cast: MemberProps[] = response.data.cast;

  return (
    <div className="w-full md:order-2 md:space-y-5">
      <h4 className="hidden text-xl font-semibold md:flex">Elenco Principal</h4>
      <div className="flex gap-5 overflow-x-scroll px-5 md:px-0 [&::-webkit-scrollbar]:hidden">
        {cast.map((member) => (
          <MemberCast key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
