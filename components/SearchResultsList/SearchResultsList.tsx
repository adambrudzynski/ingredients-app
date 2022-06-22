import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { IngredientSearchResponse } from "../../types";
import { Pagination } from "../Pagination";
import { SearchResultListItem } from "../SearchResultListItem";

interface SearchResultsListProps {
  results: IngredientSearchResponse;
}

export const SearchResultsList = ({ results }: SearchResultsListProps) => {
  const router = useRouter();

  const fetchNext = () => {
    console.log("fetchNext", results.offset + results.number);
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          offset: results.offset + results.number,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Box>
      <Flex color="white" wrap={"wrap"} gap={10}>
        {results.results.map((item) => (
          <SearchResultListItem key={item.id} item={item} />
        ))}
      </Flex>
      <Pagination
        offset={results.offset}
        resultsPerPage={results.number}
        totalResults={results.totalResults}
      />
    </Box>
  );
};
