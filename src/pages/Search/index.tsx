import { FC } from "react";
import { SearchList } from "../../components/SearchList";

export const Search: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <SearchList />
    </div>
  );
};
