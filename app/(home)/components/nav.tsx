import { HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const nav_items = [
    { page: "Home", icon: <HomeIcon size={20} />, href: "/" },
    { page: "Profile", icon: <UserIcon size={20} />, href: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 flex w-full items-center justify-center gap-10 p-5 md:bottom-auto md:left-auto md:right-0 md:top-0 md:w-fit md:gap-5">
      <div className="flex gap-10 rounded-full bg-white bg-opacity-30 px-10 py-5">
        {nav_items.map((item) => (
          <Link
            key={item.page}
            href={item.href}
            className="flex h-14 w-14 items-center justify-center rounded-full"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
