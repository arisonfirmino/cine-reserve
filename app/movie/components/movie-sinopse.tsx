const MovieSinopse = ({ overview }: { overview: string }) => {
  return (
    <div className="md:order-1 md:space-y-5">
      <h4 className="hidden text-xl font-semibold md:flex">Sinopse</h4>
      <div className="px-5 md:px-0">
        <p className="line-clamp-3 text-sm md:line-clamp-none md:text-base">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieSinopse;
