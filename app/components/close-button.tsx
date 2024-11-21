"use client";

import { useRouter } from "next/navigation";

import { XIcon } from "lucide-react";

const CloseButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-30 text-white"
    >
      <XIcon size={20} />
    </button>
  );
};

export default CloseButton;
