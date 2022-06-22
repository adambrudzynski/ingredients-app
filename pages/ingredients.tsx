import type { NextPage } from "next";
import { Search, SearchResultsList } from "../components";
import React from "react";
import { IngredientSearchQuery, IngredientSearchResponse } from "../types";
import { ParsedUrlQuery } from "querystring";
import { ApiHelper } from "../helpers";
import { Endpoints } from "../constants";

interface Context {
  query: ParsedUrlQuery;
}

export const getServerSideProps = async ({ query }: Context) => {
  return ApiHelper.search(Endpoints.ingredients, query);
};

interface IngredientsSearch {
  query: IngredientSearchQuery;
  results: IngredientSearchResponse;
}

const IngredientsSearch: NextPage<IngredientsSearch> = (props) => {
  return (
    <>
      <Search query={props.query.query} type={Endpoints.ingredients} />
      {props.results && <SearchResultsList results={props.results} />}
    </>
  );
};

export default IngredientsSearch;
