import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Endpoints } from "../../constants";
import { IngredientSearchResponse } from "../../types";
import { Pagination } from "../Pagination";
import { SearchResultListItem } from "../SearchResultListItem";

interface SearchResultsListProps {
  results: IngredientSearchResponse;
}

export const SearchResultsList = ({ results }: SearchResultsListProps) => {
  const router = useRouter();

  return (
    <Box>
      <Flex color="white" wrap={"wrap"} gap={10}>
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
