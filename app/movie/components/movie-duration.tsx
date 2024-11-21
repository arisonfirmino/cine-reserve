import { ClockIcon } from "lucide-react";
import { formatRuntime } from "@/app/helpers/formatRuntime";

const MovieDuration = ({ runtime }: { runtime: number }) => {
  return (
    <div className="order-1 flex items-center justify-center gap-2.5 text-white md:order-[3] md:justify-normal">
      <ClockIcon size={14} />
      <p className="text-sm md:text-lg">{formatRuntime(runtime)}</p>
    </div>
  );
};

export default MovieDuration;
