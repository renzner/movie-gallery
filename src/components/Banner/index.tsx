import { ChangeEvent, KeyboardEvent, FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Banner: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    if (!searchTerm) return;

    navigate(`/search?title=${searchTerm}`);
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!searchTerm) return;

      navigate(`/search?title=${searchTerm}`);
    }
  };

  return (
    <div className="flex items-center w-full max-w-81.25 h-[18.75rem] bg-banner bg-cover bg-no-repeat">
      <div className="px-12 py-8 w-full">
        <div className=" text-5xl text-white font-bold">Welcome.</div>
        <div className="text-3xl text-white font-semibold">
          Millions of movies, TV shows and people to discover. Explore now.
        </div>
        <div className="relative mt-16">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleEnter}
            className=" w-full rounded-3xl h-12 focus:outline-none pl-6 pr-28 py-4 text-gray-500"
          />
          <button
            type="button"
            onClick={handleClick}
            className="absolute top-0 right-0 rounded-3xl h-12 w-24 text-white bg-gradient-to-r from-emerald-400 to-cyan-500 text-sm font-semibold"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
