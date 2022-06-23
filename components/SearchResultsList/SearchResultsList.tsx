import { Box, Flex, Heading } from "@chakra-ui/react";

import { Endpoints } from "../../constants";
import { IngredientSearchResponse } from "../../types";
import { Pagination } from "../Pagination";
import { SearchResultListItem } from "../SearchResultListItem";

interface SearchResultsListProps {
  results: IngredientSearchResponse;
}

export const SearchResultsList = ({ results }: SearchResultsListProps) => {
  if (results.results.length === 0) {
    return (
      <Box mx="auto" my="5" maxW="3xl">
        <Heading mx="auto" size="md">
          No results for your query
        </Heading>
      </Box>
    );
  }

  return (
    <Box>
      <Flex wrap="wrap" justify="center" gap={10}>
        {results.results.map((item) => (
          <SearchResultListItem
            key={item.id}
            item={item}
            type={Endpoints.ingredients}
          />
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
