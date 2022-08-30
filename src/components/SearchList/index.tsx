import { FC } from "react";
import { SearchPreview } from "../SearchPreview";
import { useQuery } from "@tanstack/react-query";
import { useSeachQuery } from "../../hooks/use-search-query";

export type SearchResult = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
};

export const SearchList: FC = () => {
  const query = useSeachQuery();

  const { isLoading, error, data } = useQuery(["search"], () =>
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query.get(
        "title"
      )}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    ).then((res) => res.json())
  );

  if (isLoading) return <>Loading...</>;

  if (error instanceof Error)
    return <>"An error has occurred: " + error.message</>;

  console.log(data);

  return (
    <div className="w-full max-w-81.25 py-8 px-32">
      <div className="font-bold mb-8">Search Result(s):</div>
      {data.results.length > 0 ? (
        data.results.map((result: SearchResult) => {
          return <SearchPreview key={result.id} {...result} />;
        })
      ) : (
        <div className="w-full text-center">No results found</div>
      )}
    </div>
  );
};
