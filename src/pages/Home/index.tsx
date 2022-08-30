import { FC } from "react";

import { Banner } from "../../components/Banner";
import { PopularList } from "../../components/PopularList";

export const Home: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <PopularList />
    </div>
  );
};
