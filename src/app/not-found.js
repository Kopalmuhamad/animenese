import { FileX, Rewind } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col text-center text-color-accent gap-4">
      <h1 className="flex justify-center items-center gap-4  font-bold text-4xl">
        <span>
          <FileX size={38} />
        </span>
        <span>NOT FOUND</span>
      </h1>
      <Link
        href={"/"}
        className="flex items-center gap-3 py-2 px-3 rounded border-none text-color-light hover:underline hover:text-color-accent transition-all bg-color-secondary"
      >
        <span className="hover:-translate-x-1 transition-all">
          <Rewind size={24} />
        </span>
        <span>Balik deui</span>
      </Link>
    </div>
  );
};

export default Page;
