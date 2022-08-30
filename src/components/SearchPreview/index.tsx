import { FC } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { SearchResult } from "../SearchList";
import Placeholder from "../../assets/images/poster-placeholder.svg";

type SearchPreviewProps = SearchResult;

export const SearchPreview: FC<SearchPreviewProps> = ({
  id,
  title,
  overview,
  release_date,
  poster_path,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  const posterPath = poster_path
    ? `https://www.themoviedb.org/t/p/w188_and_h282_bestv2${poster_path}`
    : Placeholder;

  return (
    <div className="flex w-full h-[8.813rem] rounded-md shadow-md mb-8 border border-gray-200 overflow-hidden">
      <div className="bg-gray-100 w-[10%]">
        <img
          src={posterPath}
          alt="poster"
          onClick={handleClick}
          className="w-[5.875rem] h-[8.813rem] cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-center px-4 py-[0.625rem] w-[90%]">
        <div className="font-bold text-lg">{title}</div>
        <div className="text-gray-400 mb-4">
          {moment(release_date).format("MMMM DD, YYYY")}
        </div>
        <p className="w-full custom-truncate">{overview}</p>
      </div>
    </div>
  );
};
