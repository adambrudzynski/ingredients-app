import type { NextPage } from "next";
import { Search, SearchResultsList } from "../components";
import React from "react";
import axios from "axios";
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
      <Search query={props.query.query} />
      {props.results && <SearchResultsList results={props.results} />}
      {JSON.stringify(props)}
    </>
  );
};

export default IngredientsSearch;
