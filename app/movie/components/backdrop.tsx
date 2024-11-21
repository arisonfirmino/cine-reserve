import { getBackdropMovie } from "@/app/helpers/getBackdropMovie";

const Backdrop = ({ backdrop_path }: { backdrop_path: string }) => {
  return (
    <div
      className="absolute inset-0 z-[-1]"
      style={{
        backgroundImage: `url(${getBackdropMovie({ backdropPath: backdrop_path })})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.3,
      }}
    />
  );
};

export default Backdrop;
