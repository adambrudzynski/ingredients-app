import type { NextPage } from "next";

import React from "react";
import { Search, SearchHistory } from "../components";
import { Endpoints } from "../constants";

const Home: NextPage = () => {
  return (
    <>
      <Search type={Endpoints.ingredients} />
      <SearchHistory type={Endpoints.ingredients} />
    </>
  );
};

export default Home;
