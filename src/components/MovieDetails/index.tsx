import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import moment from "moment";
import { timeConvert } from "../../lib/time-convert";

import "./circle.css";

type Genre = {
  id: number;
  name: string;
};

type Crew = {
  name: string;
  job: string;
};

export const MovieDetails: FC = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: details,
  } = useQuery([`movieDetails-${id}`], () =>
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    ).then((res) => res.json())
  );

  const { data: credits } = useQuery([`movieCredits-${id}`], () =>
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    ).then((res) => res.json())
  );

  if (isLoading) return <>Loading...</>;

  if (error instanceof Error)
    return <>"An error has occurred: " + error.message</>;

  const percentage = Math.ceil((details.vote_average / 10) * 100);

  const CREW_MAP = ["Director", "Characters", "Screenplay", "Story", "Writer"];

  return (
    <div
      style={{
        backgroundPosition: "right -200px top",
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path})`,
      }}
      className={`bg-cover bg-no-repeat`}
    >
      <div className="flex justify-center bg-gradient-to-br from-overlay1 to-overlay2">
        <div className="flex  px-10 py-7 w-[87.5rem] text-white">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`}
            alt="poster"
            className="w-[18.75rem] h-[28.125rem] rounded-md"
          />
          <div className="flex flex-col justify-center pl-10">
            <div className=" text-4xl font-extrabold">
              {details.title}{" "}
              <span className="font-normal text-gray-50/80">{`(${moment(
                details.release_date
              ).format("YYYY")})`}</span>
            </div>
            <div className="flex gap-x-2">
              <div className=" border border-gray-400 text-gray-400 px-1 rounded-sm">
                {/* TODO: */}
                PG-13
              </div>
              <div>
                {`${moment(details.release_date).format("MM/DD/YYYY")} (${
                  details.production_countries[0].iso_3166_1
                })`}
                &nbsp;&#8226;
              </div>
              <div>
                {details.genres.map((genre: Genre, index: number) => {
                  return (
                    <span key={genre.id}>
                      {genre.name +
                        (index !== details.genres.length - 1 ? ", " : "")}
                    </span>
                  );
                })}{" "}
                &nbsp;&#8226;
              </div>
              <div>{timeConvert(details.runtime)}</div>
            </div>
            <div
              className={`c100 p${percentage} small dark green`}
              style={{ marginTop: "2rem" }}
            >
              <span style={{ color: "#fff" }}>{percentage + "%"}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <div className="mt-6 italic text-gray-400">{details.tagline}</div>
            <div className="text-xl font-bold mt-3">Overview</div>
            <div className="mt-2">{details.overview}</div>
            <div className="flex flex-wrap w-full gap-y-6 mt-6">
              {credits &&
                credits.crew
                  .sort((a: Crew, b: Crew) => {
                    if (a.job < b.job) {
                      return -1;
                    }
                    if (a.job > b.job) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((data: Crew, index: number) => {
                    if (CREW_MAP.includes(data.job)) {
                      return (
                        <div key={index} className="w-1/3">
                          <div className="font-bold">{data.name}</div>
                          <div className="text-sm">{data.job}</div>
                        </div>
                      );
                    }

                    return "";
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
