import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const respJson = await response.json();

  const searchAnime = respJson.data;

  return (
    <div>
      <Header title={`Hasil anu di pilarian ${keyword} ...`} />
      <AnimeList api={searchAnime} />
    </div>
  );
};

export default Page;
