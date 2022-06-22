import type { NextPage, InferGetServerSidePropsType } from "next";
import { Search, SearchResultsList } from "../components";
import React from "react";
import axios from "axios";
import { IngredientSearchQuery, IngredientSearchResponse } from "../types";
import { ParsedUrlQuery } from "querystring";

interface Context {
  query: ParsedUrlQuery;
}

export const getServerSideProps = async ({ query }: Context) => {
  try {
    if (query.query) {
      const apiURL = new URL(
        "https://api.spoonacular.com/food/ingredients/search"
      );
      apiURL.searchParams.set("apiKey", process.env.SPOONACULAR_API_KEY || "");

      Object.keys(query).forEach((queryParam) => {
        {
          apiURL.searchParams.set(queryParam, query[queryParam] as string);
        }
      });

      console.log("getting data", "query", query, "URL", apiURL);

      const { data: results } = await axios({
        method: "get",
        url: apiURL.toString(),
      });

      return { props: { query, results } };
    }
    return { props: { query: {}, results: null } };
  } catch (err) {
    console.log(err);
    return {
      props: {
        search: "",
        words: ["An internal error has occurred"],
      },
    };
  }
};

interface HomeProps {
  query: object;
  results: IngredientSearchResponse;
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Search query={props.query.query} />
      {props.results && <SearchResultsList results={props.results} />}
      {JSON.stringify(props)}
    </>
  );
};

export default Home;
