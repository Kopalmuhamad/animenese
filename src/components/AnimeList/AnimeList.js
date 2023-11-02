import React from "react";
import Image from "next/image";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 p-6 gap-4">
      {api.map((data) => {
        return (
          <div
            key={data.mal_id}
            className="shadow-2xl overflow-hidden rounded text-color-light hover:text-color-accent transition-all cursor-pointer"
          >
            <Image
              src={data.images.webp.image_url}
              alt={data.title}
              width={350}
              height={350}
              className="max-h-64 w-full object-cover"
            />
            <h3 className="p-4 font-medium">{data.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
