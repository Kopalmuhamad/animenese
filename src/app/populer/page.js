import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?lmit=10`
  );
  const respJson = await response.json();
  const topAnime = respJson.data;

  return (
    <div>
      <Header title={"Popular"} linkHref={"/populer"} />
      <AnimeList api={topAnime} />
    </div>
  );
};

export default Page;
