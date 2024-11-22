import Link from "next/link";

const SeeMoreButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/movie/${id}`}
      prefetch
      className="rounded-xl bg-primary px-5 py-2.5 text-sm uppercase"
    >
      Ver mais
    </Link>
  );
};

export default SeeMoreButton;
