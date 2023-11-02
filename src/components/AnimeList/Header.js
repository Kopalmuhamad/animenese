import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref }) => {
  return (
    <div className="flex justify-between items-center p-5 text-color-light">
      <h1 className="font-bold text-2xl">{title}</h1>
      {linkHref ? (
        <Link
          href={linkHref}
          className="underline text-medium hover:text-color-accent transition-all "
        >
          Lihat semua
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
