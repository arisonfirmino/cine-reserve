import { TicketIcon } from "lucide-react";

interface BookButtonProps {
  className?: string;
}

const BookButton = ({ className }: BookButtonProps) => {
  return (
    <button
      className={`bg-primary items-center justify-center gap-2.5 rounded-xl px-5 py-2.5 uppercase ${className}`}
    >
      <TicketIcon size={20} />
      Reservar
    </button>
  );
};

export default BookButton;
