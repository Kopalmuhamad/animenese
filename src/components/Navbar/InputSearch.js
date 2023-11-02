"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = () => {
     
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Pilarien di dieu..."
        className="py-2 pl-3 border-2 rounded w-full outline-none bg-color-secondary border-none"
        ref={searchRef}
      />
      <button
        onClick={handleSearch}
        className="absolute top-2/4 end-0 h-full -translate-y-2/4 px-2 py-0 rounded border-none outline-none"
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
