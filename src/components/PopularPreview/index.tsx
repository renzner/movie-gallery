import { FC } from "react";
import { useNavigate } from "react-router-dom";

type PopularPreviewProps = {
  id: number;
  imageUrl: string;
  title: string;
  year: string;
};

export const PopularPreview: FC<PopularPreviewProps> = ({
  id,
  imageUrl,
  title,
  year,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="w-40 rounded-lg overflow-hidden shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="cursor-pointer"
        onClick={handleClick}
      />
      <div className="px-3 py-5">
        <div className="font-bold">{title}</div>
        <div className="font-light text-gray-500">{year}</div>
      </div>
    </div>
  );
};
