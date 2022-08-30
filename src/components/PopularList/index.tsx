import { FC } from "react";
import { PopularPreview } from "../PopularPreview";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

type Result = {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
};

export const PopularList: FC = () => {
  const { isLoading, error, data } = useQuery(["movies"], () =>
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    ).then((res) => res.json())
  );

  if (isLoading) return <>Loading...</>;

  if (error instanceof Error)
    return <>"An error has occurred: " + error.message</>;

  return (
    <div className="w-full max-w-81.25 py-8 px-10">
      <div className="text-2xl font-semibold mb-6">What's Popular</div>
      <div className="flex flex-wrap gap-x-6 gap-y-6 justify-between">
        {data.results.map((result: Result) => {
          return (
            <PopularPreview
              key={result.id}
              id={result.id}
              title={result.title}
              year={moment(result.release_date).format("MMM D, YYYY")}
              imageUrl={`https://image.tmdb.org/t/p/w440_and_h660_face/${result.poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
};
