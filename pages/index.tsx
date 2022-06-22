import type { NextPage } from "next";

import React from "react";
import { Search, SearchHistory } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Search />
      <SearchHistory />
    </>
  );
};

export default Home;
