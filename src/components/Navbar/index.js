import Link from "next/link";
import React from "react";
import InputSearch from "@/components/Navbar/InputSearch";

const Navbar = () => {
  return (
    <header className="flex flex-col items-start justify-between gap-4 sm:gap-0 sm:flex-row sm:items-center p-2 px-5 text-color-light bg-color-accent ">
      <Link href={"/"} className="font-bold text-2xl">
        ANIMENESE
      </Link>
      <InputSearch />
    </header>
  );
};

export default Navbar;
