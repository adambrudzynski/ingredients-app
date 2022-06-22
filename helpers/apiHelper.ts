import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { Endpoints } from "../constants";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  function (config) {
    if (!process.env.SPOONACULAR_API_KEY) {
      return Promise.reject("No API key provided");
    }
    if (config.url) {
      const Url = new URL(config.url);
      Url.searchParams.set("apiKey", process.env.SPOONACULAR_API_KEY);
      config.url = Url.toString();
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export class ApiHelper {
  static async search(endpoint: Endpoints, query: ParsedUrlQuery) {
    try {
      if (query.query) {
        const apiURL = new URL(
          `https://api.spoonacular.com/food/${endpoint}/search`
        );
        Object.keys(query).forEach((queryParam) => {
          {
            apiURL.searchParams.set(queryParam, query[queryParam] as string);
          }
        });

        const { data: results } = await axiosInstance({
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
          query: {},
          results: null,
          error: err,
        },
      };
    }
  }
}
